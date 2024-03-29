var temp,
  adv_preroll = "",
  adv_postroll = "",
  user_playfrom = "",
  user_played = "",
  major_browsers = {
    Chrome: 60,
    Chromium: 60,
    Safari: 6,
    Firefox: 55,
    Opera: 45,
    Vivaldi: 2,
    YaBrowser: 15,
    Trident: 7,
  },
  ua = navigator.userAgent,
  match = ua.match(
    /(opera|chrome|chromium|safari|firefox|msie|trident|edg|yabrowser|vivaldi)\/?\s*(\.?\d+(\.\d+)*)/i
  );
match &&
  null != (temp = ua.match(/version\/([\.\d]+)/i)) &&
  (match[2] = temp[1]);
var browser = match ? match[1] : "",
  version = match ? match[2] : 0,
  version = parseInt(version) || 0,
  android = ua.match(/android/i),
  android_version = 0;
android &&
  ((android_version =
    ((match = ua.match(/android[ \/-](\d+(\.\d+)*)/i)) &&
      1 < match.length &&
      match[1]) ||
    0),
  (android_version = parseInt(android_version) || 0));
var ios = ua.match(/(ipod|iphone|ipad)/i),
  ios_version = 0;
ios &&
  (1 < ios.length && (ios = ios[1]),
  (ios_version =
    ((match = ua.match(/version\/([\.\d]+)/i)) &&
      1 < match.length &&
      match[1]) ||
    0),
  (ios_version = parseInt(ios_version) || 0));
var mobile = !(!android && !ios),
  tv =
    -1 < ua.search(/(TV|tvOS|webOS|armv|BRAVIA|Roku|Tizen|LG|Philips)\/?\s*/i),
  desktop = !mobile && !tv && -1 < ua.search(/(windows|linux|mac)\/?\s*/i),
  player_type = "new",
  player_init = !1,
  player_paused = !0,
  check_timeout = 5e3,
  log_timeout = 3e4,
  log_write = !1,
  log_update_time = 0,
  init_time = (pause_time = Math.floor(Date.now() / 1e3)),
  storage_support = StorageSupport();
function StorageSupport() {
  try {
    var e = window.localStorage,
      t = "__storage_test__";
    return e.setItem(t, t), e.removeItem(t), !0;
  } catch (e) {
    return !1;
  }
}
function PlayerjsEvents(e, t, o) {
  "init" == e && (player_init = !0),
    "start" == e && (log_write = !0),
    "pause" == e &&
      ((player_paused = !0), (pause_time = Math.floor(Date.now() / 1e3))),
    "play" == e && ((player_paused = !1), (pause_time = 0));
}
function uppodEvent(e) {
  e = e.type;
  "init" == e && (player_init = !0),
    "pause" == e &&
      ((player_paused = !0), (pause_time = Math.floor(Date.now() / 1e3))),
    "play" == e && ((player_paused = !1), (pause_time = 0));
}
function userlog() {
  if (0 == log_write)
    return setTimeout(function () {
      userlog();
    }, log_timeout);
  var e = location.hostname,
    t = "",
    o = "",
    a = 0;
  if (
    (null != localStorage.getItem("pljsplayfrom_" + e + PLAYER_CUID) &&
      ((t = localStorage.getItem("pljsplayfrom_" + e + PLAYER_CUID)),
      (a = parseInt(t.split("--")[2]) || 0)),
    null != localStorage.getItem("pljsplayed_" + e + PLAYER_CUID) &&
      (o = localStorage.getItem("pljsplayed_" + e + PLAYER_CUID)),
    log_update_time == a)
  )
    return setTimeout(function () {
      userlog();
    }, log_timeout);
  $.post("/log", { playfrom: t, played: o, cuid: PLAYER_CUID }).always(
    function () {
      (log_update_time = a),
        setTimeout(function () {
          userlog();
        }, log_timeout);
    }
  );
}
function hop() {
  var t = Math.floor(Date.now() / 1e3),
    o = !1;
  return (
    $.ajax({
      url: "/hop",
      type: "GET",
      async: !1,
      data: { h: t },
      success: function (e) {
        t == e && (o = !0);
      },
    }),
    o
  );
}
function check_reload() {
  var e = Math.floor(Date.now() / 1e3);
  1 == player_paused &&
    0 < pause_time &&
    14400 <= e - pause_time &&
    hop() &&
    window.location.reload(),
    setTimeout(function () {
      check_reload();
    }, check_timeout);
}
function user_data() {
  var e = "DESKTOP";
  mobile ? (e = "MOBILE") : tv && (e = "TV"),
    $.ajax({
      dataType: "json",
      url: "/user_data",
      data: { page: "movie", movie_id: MOVIE_ID, cuid: PLAYER_CUID, device: e },
      success: function (e) {
        var t, o, a;
        storage_support &&
          0 < CURRENT_USER_ID &&
          ((t = location.hostname),
          (a = o = 0),
          null != localStorage.getItem("pljsplayfrom_" + t + PLAYER_CUID) &&
            (o =
              parseInt(
                localStorage
                  .getItem("pljsplayfrom_" + t + PLAYER_CUID)
                  .split("--")[2]
              ) || 0),
          e.playfrom && (a = parseInt(e.playfrom.split("--")[2]) || 0),
          o < a &&
            (e.playfrom && (user_playfrom = e.playfrom),
            e.played && (user_played = e.played))),
          (adv_preroll = e.preroll),
          (adv_postroll = e.postroll),
          0 == e.allow_watch
            ? $("#watch_block").html(
                '<div class="alert alert-danger"><p>Видео недоступно для просмотра в вашей стране.</p><p>Вы можете использовать <a href="https://ru.wikipedia.org/wiki/VPN" target="_blank" style="color:#a94442;text-decoration: underline;">VPN</a> для смены вашей геолокации.</p><br><p><ol><li>Перейдите на сайт <a href="http://sravni-vpn.org" target="_blank" style="color:#a94442;text-decoration: underline;">sravni-vpn.org</a> и выберите один из VPN сервисов. <br>Или установите бесплатное <a href="https://chrome.google.com/webstore/search/VPN?hl=ru&_category=extensions" target="_blank" style="color:#a94442;text-decoration: underline;">расширение</a> для браузера (но у бесплатных расширений могут отсутствовать сервера расположенные в тех странах, с которых разрешен просмотр).</li><li>Скачайте приложение и в настройках VPN укажите одну из следующих стран: Украина, Россия, Белоруссия, Казахстан, Армения, Азербайджан, Грузия, Узбекистан, Киргизия, Туркмения, Молдова, Турция.</li><li>Зайдите на сайт и наслаждайтесь просмотром.</li></ol></p></div>'
              )
            : MOVIE_IS_COMING ||
              (void 0 !== $.cookie("player_type")
                ? (player_type = $.cookie("player_type"))
                : ((player_type = "new"),
                  $.cookie("player_type", player_type, {
                    expires: 7,
                    path: "/",
                  })),
              load_player()),
          player_init ||
            ($("body").prepend(e.branding),
            $(".sidebar-afk").after(e.banner_side));
      },
    });
}
function init_player(e, t) {
  var o, a;
  "old" == t
    ? ((o = e.split("|")),
      (a = {
        m: "video",
        uid: "videoplayer",
        st: "uppodvideo",
        preroll: adv_preroll,
        postroll: adv_postroll,
      }),
      "file" == o[0] ? (a.file = o[1]) : (a.pl = o[1]),
      new Uppod(a),
      document
        .getElementById("videoplayer")
        .addEventListener("init", uppodEvent, !1),
      document
        .getElementById("videoplayer")
        .addEventListener("start", uppodEvent, !1),
      document
        .getElementById("videoplayer")
        .addEventListener("play", uppodEvent, !1),
      document
        .getElementById("videoplayer")
        .addEventListener("pause", uppodEvent, !1))
    : ((a = {
        id: "videoplayer",
        file: (o = e.split("|"))[1],
        cuid: PLAYER_CUID,
        preroll: adv_preroll,
        postroll: adv_postroll,
        playfrom: user_playfrom,
        played: user_played,
      }),
      "file" == o[0]
        ? ((a.subtitle = o[2]), (a.default_subtitle = o[3]))
        : (a.default_subtitle = o[2]),
      new Playerjs(a));
}
function load_player() {
  var e = "mp4";
  "old" == player_type
    ? ($("#change-player-text").text("Старый плеер"),
      $("#set_new_player").parent().removeClass("active"),
      $("#set_old_player").parent().addClass("active"),
      $("#videoplayer_content").html('<div id="videoplayer"></div>'),
      (o = (9 * (t = $("#videoplayer_content").width())) / 16),
      "films" != MOVIE_TYPE && (o += 60),
      $("#videoplayer_content").css({ width: t, height: o }),
      void 0 !== major_browsers[browser] &&
        version >= major_browsers[browser] &&
        desktop &&
        Hls.isSupported() &&
        (e = "hls"))
    : ($("#change-player-text").text("Новый плеер"),
      $("#set_old_player").parent().removeClass("active"),
      $("#set_new_player").parent().addClass("active"),
      $("#videoplayer_content").html('<div id="videoplayer"></div>'),
      (o = (9 * (t = $("#videoplayer_content").width())) / 16),
      $("#videoplayer_content").css({ width: t, height: o }),
      void 0 !== major_browsers[browser] &&
        version >= major_browsers[browser] &&
        (desktop || android
          ? Hls.isSupported() && (e = "hls")
          : ios && (e = "hls")));
  var t = document.getElementsByTagName("head")[0],
    o = document.createElement("script");
  (o.type = "text/javascript"),
    (o.async = !0),
    (o.src =
      "/videoplayer.js?movie_id=" +
      MOVIE_ID +
      "&identifier=" +
      IDENTIFIER +
      "&player_type=" +
      player_type +
      "&file_type=" +
      e +
      "&_=" +
      Math.floor(Date.now() / 1e3)),
    t.insertBefore(o, t.firstChild);
}
$(document).ready(function () {
  storage_support &&
    0 < CURRENT_USER_ID &&
    "new" == player_type &&
    setTimeout(function () {
      userlog();
    }, log_timeout),
    user_data(),
    check_reload(),
    MOVIE_IS_COMING ||
      ($("#tab-options a:first").tab("show"),
      $("#tab-options a").click(function () {
        return $(this).tab("show"), !1;
      }),
      $("#set_new_player").click(function () {
        return (
          $("#dropdown-player").removeClass("open"),
          "new" == player_type ||
            ($.cookie("player_type", "new", { expires: 7, path: "/" }),
            window.location.reload()),
          !1
        );
      }),
      $("#set_old_player").click(function () {
        return (
          $("#dropdown-player").removeClass("open"),
          "old" == player_type ||
            ($.cookie("player_type", "old", { expires: 7, path: "/" }),
            window.location.reload()),
          !1
        );
      }));
  var t = !1;
  $('#tab-options a[href="#trailer"]').click(function (e) {
    t ||
      (e.preventDefault(),
      $("#trailer").html(
        '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="' +
          MOVIE_TRAILER +
          '" allowfullscreen></iframe></div>'
      ),
      (t = !0));
  });
  var o = $("#comments-entries .new_comment");
  $("#comment_form").submit(function () {
    var e = $(this);
    e.attr("disabled", "disabled");
    var t = $("#comment").val();
    return (
      (t = t.trim().replace(/<\/?[^>]+>/gi, ""))
        ? $.post(
            "/add_comment",
            {
              movie_id: MOVIE_ID,
              comment: t,
              author_name: $("#author_name").val(),
            },
            function (e) {
              var t;
              $("#comment").val(""),
                e &&
                  (void 0 === (t = jQuery.parseJSON(e)).error
                    ? ((avatar_uri = t.avatar
                        ? IMAGES_URL + "/storage/54x54/avatars/" + t.avatar
                        : IMAGES_URL + "/static/images/noavatar.png"),
                      (e = o.clone(!0).removeClass("new_comment")).attr(
                        "data-comment-id",
                        t.id
                      ),
                      e
                        .find(".media-body p.small")
                        .find("a")
                        .attr("data-id", t.id),
                      e.find(".media-body p.text").html(t.comment),
                      e.find(".media-object").attr("src", avatar_uri),
                      e.find(".media-heading b").text(t.username),
                      e.find(".media-heading span").text(t.added),
                      e.show(),
                      $("#comments-entries").prepend(e))
                    : alert(t.error));
            }
          )
        : (alert("Укажите ваш комментарий"), $("#comment").focus()),
      e.removeAttr("disabled"),
      !1
    );
  }),
    $(document).on("click", "#comments-entries .remove", function () {
      var e = $(this).attr("data-id");
      return (
        $.post("/delete_comment", { comment_id: e }).done(function () {
          notify("Комментарий успешно удален"),
            $('#comments-entries .media[data-comment-id="' + e + '"]').remove();
        }),
        !1
      );
    });
  var a,
    r = 1;
  setTimeout(function () {
    $.get("/comments", { movie_id: MOVIE_ID, page: r }).done(function (e) {
      r++, $("#comments-entries").html(e);
    });
  }, 200),
    $("#load_more_comments").click(function (e) {
      var t = $(this);
      return (
        t.text("Загружаются..."),
        setTimeout(function () {
          $.get("/comments", { movie_id: MOVIE_ID, page: r }).done(function (
            e
          ) {
            COMMENTS_PAGES == r
              ? (t.hide(), $("#load_all_comments").hide())
              : t.text("Показать еще комментарии"),
              r++,
              $("#comments-entries").append(e);
          });
        }, 200),
        !1
      );
    }),
    $("#load_all_comments").click(function (e) {
      var t = $(this);
      return (
        t.text("Загружаются..."),
        setTimeout(function () {
          $.get("/comments", { movie_id: MOVIE_ID, page: r, all: 1 }).done(
            function (e) {
              t.hide(),
                $("#load_more_comments").hide(),
                $("#comments-entries").append(e);
            }
          );
        }, 200),
        !1
      );
    }),
    $(".btn-fav").click(function (e) {
      if (CURRENT_USER_ID <= 0)
        return (
          (login_favorite_id = MOVIE_ID),
          (login_invoked_type = "favorite"),
          void account_modal()
        );
      var t = $(".favorite"),
        o = $(this);
      return (
        (o.hasClass("is-favorited") ? 1 : 0)
          ? $.post("/delete_favorite", { movie_id: MOVIE_ID }).done(
              function () {
                notify("Контент удален из избранного"),
                  o.attr("title", "Добавить в избранное"),
                  o.text("В избранное"),
                  o.removeClass("is-favorited"),
                  t.removeClass("is-favorited"),
                  t.css({ display: "" }),
                  t.attr("title", "Добавить в избранное");
              }
            )
          : $.post("/add_favorite", { movie_id: MOVIE_ID }).done(function () {
              notify("Контент добавлен в избранное"),
                o.attr("title", "Удалить из избранного"),
                o.text("В избранном"),
                o.addClass("is-favorited"),
                t.addClass("is-favorited"),
                t.css({ display: "block" }),
                t.attr("title", "Удалить из избранного");
            }),
        !1
      );
    }),
    $("#rating").rating({
      start: 0,
      stop: 10,
      filled: "glyphicon glyphicon-star rating-star",
      empty: "glyphicon glyphicon-star-empty rating-star-empty",
      extendSymbol: function (e) {
        $(this).tooltip({
          container: "body",
          placement: "bottom",
          title: "Оценка " + e,
        });
      },
    }),
    $("#rating").on("change", function () {
      var e,
        t = $(this).val();
      a != t &&
        ((e = $.post("/vote", { movie_id: MOVIE_ID, rating: t })).done(
          function (e) {
            (a = t),
              $("#rating-text").text("Ваша оценка: " + t),
              $("#rating-success").show();
          }
        ),
        e.fail(function (e) {
          alert("Произошла ошибка, пожалуйста попробуйте чуть позже");
        }));
    }),
    $("#remove-rating").on("click", function () {
      var e = $.post("/delete_vote", { movie_id: MOVIE_ID });
      e.done(function (e) {
        $("#rating-success").hide();
      }),
        e.fail(function (e) {
          alert("Произошла ошибка, пожалуйста попробуйте чуть позже");
        });
    });
});
