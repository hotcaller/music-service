from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=200)
    info = models.CharField(max_length=300)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'artists'


class Album(models.Model):
    title = models.CharField(max_length=200)
    release_date = models.IntegerField(default=1900)
    cover_art_path = models.CharField(max_length=200, default="")
    artist = models.ForeignKey(Artist, null=True, on_delete=models.CASCADE, related_name="albums")

    def __str__(self):
        return self.title
    
    class Meta:
        db_table = 'albums'


class Song(models.Model):
    title = models.CharField(max_length=200)
    duration = models.IntegerField(default=0)
    release_date = models.IntegerField(default=1900)
    album = models.ForeignKey(Album, null=True, on_delete=models.CASCADE, related_name="songs")

    def __str__(self):
        return self.title
    
    class Meta:
        db_table = 'songs'




