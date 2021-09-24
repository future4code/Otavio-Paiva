import styled from "styled-components";

export const Container = styled.div`
  background: #c05621;
  min-height: 100vh;
  padding: 60px;
  color: #fff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    opacity: 0.5;
    font-size: 16px;
  }

  a {
    color: #fff;
    text-decoration: none;

    & + a {
      margin-left: 24px;
    }
  }
`;

export const SearchBox = styled.div`
  background-color: #fff;
  opacity: 0.7;
  display: flex;
  align-items: center;
  height: 28px;
  border-radius: 10px;
  padding: 8px;

  svg {
    color: #c05621;
    margin-right: 8px;
  }

  input {
    border: none;
    background: none;
  }
`;

export const Content = styled.div``;

export const AddPlaylist = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const AddPlaylistButton = styled.div`
  button {
    color: #7b341e;
    display: flex;
    align-items: center;
    padding: 8px;
    height: 32px;
    border-radius: 10px;
    border: none;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  h1 {
    font-size: 16px;
  }
`;

export const AddPlaylistForm = styled.div`
  form {
    display: flex;
    align-items: center;

    button {
      border: none;
      background: transparent;
      color: #fff;
      display: flex;
      align-items: center;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }

    input {
      padding: 4px;
      border-radius: 10px;
      border: none;
      margin-right: 8px;
      height: 32px;
    }
  }
`;

export const PlaylistsSection = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #7b341e;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  h1 {
    font-size: 20px;
    opacity: 0.6;
  }
`;

export const YourPlaylists = styled.div`
  display: flex;
`;

export const PlaylistBox = styled.div`
  display: flex;
  /* overflow-x: auto; */
`;

export const PlaylistBoxName = styled.div`
  display: flex;

  button {
    font-size: 24px;
    opacity: 1;
    cursor: pointer;
    background: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: flex-start;
    transition: all 0.4s;

    :hover {
      transform: scale(1.1);
    }
  }
`;
export const PlaylistBoxRemove = styled.div`
  button {
    margin-left: 8px;
    margin-right: 40px;
    border: none;
    background: transparent;
  }

  svg {
    width: 16px;
    height: 16px;
    color: red;
  }
`;

export const PlaylistMusics = styled.div`
  display: flex;
  overflow-x: auto;
  background-color: #7b341e;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  button {
    margin-left: 24px;
    height: 40px;
    border: none;
    padding: 8px;
    border-radius: 10px;
    opacity: 0.8;
    font-weight: bold;
  }
`;

export const PlaylistDetailsCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  opacity: 0.8;
  color: #c05621;
  padding: 12px;
  border-radius: 10px;

  & + div {
    margin-left: 24px;
  }

  strong {
    font-weight: bold;
  }

  iframe {
    width: 240px;
    height: 80px;
  }

  button {
    background-color: red;
    color: #fff;
    margin-top: 12px;
    margin-left: 0;
    padding: 4px;
    height: 32px;
  }
`;

export const AddMusic = styled.div`
  display: flex;
`;

export const AddMusicButton = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  h1 {
    font-size: 16px;
    margin-left: 8px;
  }
`;
export const AddMusicForm = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  background-color: #fff;
  opacity: 0.8;
  padding: 12px;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      padding: 4px;
      border: none;
      border-radius: 10px;
      background-color: #cbd5e0;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      margin: 0;
      margin-top: 12px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      transition: all 0.2s;
      background-color: #cbd5e0;

      :hover {
        background-color: #c05621;
        color: #fff;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;
