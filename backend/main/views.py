from rest_framework.views import APIView
from rest_framework.response import Response
from main.models import Album, Song
from main.serializers import AlbumSerializer, SongSerializer

class AlbumListView(APIView):
    def get(self, request):
        albums = Album.objects.all()
        serializer = AlbumSerializer(albums, many=True)
        return Response(serializer.data)

class SongListView(APIView):
    def get(self, request):
        songs = Song.objects.all()
        serializer = SongSerializer(songs, many=True)
        return Response(serializer.data)
    