
from rest_framework import serializers
from .models import Artist, Album, Song


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['name', 'info']


class AlbumSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer()


    class Meta:
        model = Album
        fields = ['title', 'release_date', 'cover_art_path', 'artist']


class SongSerializer(serializers.ModelSerializer):
    album = AlbumSerializer()
    formatted_duration = serializers.SerializerMethodField()

    
    class Meta:
        model = Song
        fields = ['title', 'formatted_duration', 'release_date', 'album',]
    
    def get_formatted_duration(self, obj):
        minutes, seconds = divmod(obj.duration, 60)  # Convert seconds to minutes and seconds
        return f"{minutes}:{seconds:02}"  # Format as mm:ss
