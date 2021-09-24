import React from "react";
import axios from "axios";
import {
  Container,
  Header,
  SearchBox,
  Content,
  PlaylistsSection,
  PlaylistMusics,
  PlaylistBox,
  AddPlaylist,
  AddPlaylistButton,
  AddPlaylistForm,
  PlaylistBoxName,
  PlaylistBoxRemove,
  YourPlaylists,
  PlaylistDetailsCard,
  AddMusic,
  AddMusicButton,
  AddMusicForm,
} from "./styles";
import { FiSearch, FiPlusCircle, FiX } from "react-icons/fi";

const headers = {
  headers: {
    Authorization: "otavio-augusto-maryam",
  },
};

export default class App extends React.Component {
  state = {
    playlists: [],
    openAddPlaylist: false,
    openAddMusicList: false,
    playlistName: "",
    musicName: "",
    artistName: "",
    urlMusic: "",
    openTracks: false,
    playlistDetail: [],
    currentPlaylistId: "",
    currentTrackId: "",
  };

  componentDidMount = () => {
    this.getAllPlaylists();
  };

  handleOpenAddPlaylist = () => {
    this.setState({ openAddPlaylist: !this.state.openAddPlaylist });
  };

  handleOpenAddMusic = () => {
    this.setState({ openAddMusicList: !this.state.openAddMusicList });
  };

  handlePlaylistTracks = (playlistId) => {
    this.setState({ openTracks: !this.state.openTracks });
    this.setState({ currentPlaylistId: playlistId });
    this.getPlaylistTracks(playlistId);
  };

  handleAddPlaylistName = (e) => {
    this.setState({ playlistName: e.target.value });
  };

  handleMusicName = (e) => {
    this.setState({ musicName: e.target.value });
  };

  handleMusicArtist = (e) => {
    this.setState({ artistName: e.target.value });
  };

  handleMusicUrl = (e) => {
    this.setState({ urlMusic: e.target.value });
  };

  getPlaylistTracks = async (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`;

    try {
      const res = await axios.get(url, headers);
      this.setState({ playlistDetail: res.data.result.tracks });
    } catch (err) {
      alert("Não foi possível retornar a(s) música(s)");
    }
  };

  getAllPlaylists = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    try {
      const res = await axios.get(url, headers);
      this.setState({ playlists: res.data.result.list });
    } catch (err) {
      alert(err.response);
    }
  };

  createPlaylist = async (e) => {
    e.preventDefault();
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.playlistName,
    };

    try {
      const res = await axios.post(url, body, headers);
      this.setState({ playlistName: "" });
      alert("Playlist criada com sucesso!");
      this.getAllPlaylists();
      return res;
    } catch (err) {
      alert("Não foi possível criar a playlist");
    }
  };

  deletePlaylist = async (id) => {
    const confirmationDelete = window.confirm(
      "Tem certeza de que deseja deletar a playlist?"
    );

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

    if (confirmationDelete === true) {
      try {
        const res = await axios.delete(url, headers);

        this.getAllPlaylists(res);
      } catch (err) {
        alert("Não foi possível deletar essa playlist");
      }
    } else {
      this.getAllPlaylists();
    }
  };

  addTrackToPlaylist = async (e) => {
    e.preventDefault();
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.currentPlaylistId}/tracks`;

    const body = {
      name: this.state.musicName,
      artist: this.state.artistName,
      url: this.state.urlMusic,
    };

    try {
      const res = await axios.post(url, body, headers);
      this.setState({ musicName: "" });
      this.setState({ artistName: "" });
      this.setState({ urlMusic: "" });
      alert("Música adicionada com sucesso!");
      this.getPlaylistTracks(this.state.currentPlaylistId);
      return res;
    } catch (err) {
      alert("Não foi possível criar a música");
    }
  };

  removeTrackFromPlaylist = async (trackId) => {
    const confirmationDelete = window.confirm(
      "Tem certeza de que deseja deletar a música?"
    );

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.currentPlaylistId}/tracks/${trackId}`;

    if (confirmationDelete === true) {
      try {
        const res = await axios.delete(url, headers);

        this.getPlaylistTracks(this.state.currentPlaylistId);
        return res;
      } catch (err) {
        alert("Não foi possível deletar essa música");
      }
    } else {
      this.getPlaylistTracks();
    }
  };

  render() {
    const playlistsList = this.state.playlists.map((playlist) => {
      return (
        <PlaylistBox key={playlist.id}>
          <PlaylistBoxName>
            <button onClick={() => this.handlePlaylistTracks(playlist.id)}>
              {playlist.name}
            </button>
          </PlaylistBoxName>
          <PlaylistBoxRemove>
            <button onClick={() => this.deletePlaylist(playlist.id)}>
              <FiX />
            </button>
          </PlaylistBoxRemove>
        </PlaylistBox>
      );
    });

    return (
      <Container>
        <Header>
          <h1>Labefy</h1>
          <h2>What you want to hear today?</h2>
          <nav>
            <a href="/">Home</a>
            <a href="/">Playlists</a>
            <a href="/">Podcasts</a>
            <a href="/">Create playlist</a>
          </nav>
          <SearchBox>
            <FiSearch />
            <input type="text" />
          </SearchBox>
        </Header>
        <Content>
          <AddPlaylist>
            {this.state.openAddPlaylist === false ? (
              <AddPlaylistButton>
                <button onClick={() => this.handleOpenAddPlaylist()}>
                  <FiPlusCircle />
                  <h1>Add playlist</h1>
                </button>
              </AddPlaylistButton>
            ) : (
              <AddPlaylistForm>
                <form onSubmit={this.createPlaylist}>
                  <input
                    type="text"
                    placeholder="Name"
                    value={this.state.playlistName}
                    onChange={this.handleAddPlaylistName}
                  />
                  <button type="submit">
                    <FiPlusCircle />
                  </button>
                </form>
              </AddPlaylistForm>
            )}
          </AddPlaylist>
          <PlaylistsSection>
            <h1>Your playlists</h1>
            <YourPlaylists>{playlistsList}</YourPlaylists>
          </PlaylistsSection>
          {this.state.currentPlaylistId === "" ? (
            ""
          ) : (
            <PlaylistMusics>
              {this.state.playlistDetail.map((music) => {
                return (
                  <PlaylistDetailsCard id={music.id}>
                    <strong>{music.name}</strong>
                    <strong>{music.artist}</strong>
                    <iframe
                      title={music.artist}
                      src={music.url}
                      width="100%"
                      height="380"
                      frameBorder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                    <button
                      onClick={() => this.removeTrackFromPlaylist(music.id)}
                    >
                      Remover
                    </button>
                  </PlaylistDetailsCard>
                );
              })}
              <AddMusic>
                {this.state.openAddMusicList === "false" ? (
                  <AddMusicButton>
                    <button
                      onClick={() => this.handleOpenAddMusic(playlistsList)}
                    >
                      <FiPlusCircle />
                      <h1>Add music</h1>
                    </button>
                  </AddMusicButton>
                ) : (
                  <AddMusicForm>
                    <form onSubmit={this.addTrackToPlaylist}>
                      <input
                        type="text"
                        placeholder="Nome da música"
                        value={this.state.musicName}
                        onChange={this.handleMusicName}
                      />
                      <input
                        type="text"
                        placeholder="Artista"
                        value={this.state.artistName}
                        onChange={this.handleMusicArtist}
                      />
                      <input
                        type="text"
                        placeholder="Url"
                        value={this.state.urlMusic}
                        onChange={this.handleMusicUrl}
                      />
                      <button type="submit">
                        <FiPlusCircle />
                        Adicionar
                      </button>
                    </form>
                  </AddMusicForm>
                )}
              </AddMusic>
            </PlaylistMusics>
          )}
        </Content>
      </Container>
    );
  }
}
