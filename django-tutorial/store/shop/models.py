from django.db import models


from django_quill.fields import QuillField
# Create your models here.

class Category(models.Model):
    name = models.CharField("Name", max_length=50)
    slug = models.SlugField("*", max_length=50)

    def __str__(self):
        return f"{self.name}"

    class Meta:
        verbose_name_plural = "Categories"


class Tag(models.Model):
    name = models.CharField("Name", max_length=50)
    slug = models.SlugField("*", max_length=50)

    def __str__(self):
        return f"{self.name}"

    class Meta:
        verbose_name_plural = "Tags"

COLORS = (
        ('white', 'WHITE'),
        ('black', 'BLACK'),
        ('blue', 'BLUE'),
        ('green', 'GREEN'),
        ('yellow', 'YELLOW'),
        ('red', 'RED'),
        ('tomato', 'TOMATO'),
        ('pink', 'PINK'),
        ('teal', 'TEAL'),
        ('brown', 'BROWN'),
    )

class Product(models.Model):
    name = models.CharField("Name", max_length=100)
    slug = models.SlugField("*", max_length=100, unique=True, db_index=True)
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name='products'
        )
    tag = models.ManyToManyField(Tag, related_name='tags')
    image = models.ImageField("Product image", upload_to='product_images/')
    price = models.PositiveIntegerField("Price", default=0)
    description = models.TextField()
    in_stock = models.PositiveIntegerField("Count", default=1)
    colors = models.CharField(choices=COLORS, max_length=50, blank=True)
    stars = models.PositiveIntegerField("Stars", default=0)
    discount = models.PositiveIntegerField("Discount %",default=0)

    def __str__(self):
        return f"{self.name}"
    # self.price = 100
    # self.discount = 10
    
    def get_discount_price(self):
        price = self.price
        if self.discount:
            discount  = (self.price / 100) * self.discount 
            price = price - discount
        else:
            price = self.price
        return int(round(price, 0))
    

    class Meta:
        ordering = ["-id"]



# Product Images model
class ProductImages(models.Model):
	product = models.ForeignKey(Product,
		default=None,
		null=True,
		blank=True,
		on_delete=models.CASCADE,
		related_name='product_images')
	image = models.ImageField('Tovar alohida rasmlari',
		upload_to='product_images/',
		blank=True, null=True,)

	def __str__(self):
		return self.product.name

	class Meta:
		verbose_name = 'Tovar rasmlari'
		verbose_name_plural = 'Tovar rasmlari'

    