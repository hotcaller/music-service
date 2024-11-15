from django.contrib import admin
from main.models import Artist, Album, Song


class ArtistAdmin(admin.ModelAdmin):
    list_display = ('name', 'info')
    list_filter = ()


class AlbumAdmin(admin.ModelAdmin):
    list_display = ('title', 'release_date', 'artist')
    search_fields = ('title',)
    list_filter = ()

    

class SongAdmin(admin.ModelAdmin):
    list_display = ('title', 'duration', 'release_date')
    search_fields = ('title',)
    list_filter = ()


admin.site.register(Artist, ArtistAdmin)
admin.site.register(Album, AlbumAdmin)
admin.site.register(Song, SongAdmin)