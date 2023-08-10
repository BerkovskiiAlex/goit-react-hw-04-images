import React from 'react';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImg } from '../service/api';

export class App extends React.Component {
  state = {
    q: '',
    page: 1,
    images: [],
    disabled: false,
    loading: false,
    totalHits: 0,
    selectedImageIndex: null,
    modalOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;
    if (prevState.q !== q || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const { hits, totalHits } = await fetchImg({
          q,
          page,
        });

        this.setState(prev => ({
          images: [...prev.images, ...hits],
          totalHits,
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSetSearch = query => {
    this.setState({ q: query, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  handleImageClick = index => {
    this.setState({ selectedImageIndex: index, modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ selectedImageIndex: null, modalOpen: false });
  };

  render() {
    const {
      disabled,
      loading,
      images,
      totalHits,
      modalOpen,
      selectedImageIndex,
    } = this.state;
    return (
      <section>
        <Searchbar onSetSearch={this.handleSetSearch} />
        {loading && images.length === 0 ? (
          <Loader />
        ) : (
          <ImageGallery>
            <ImageGalleryItem images={images} onClick={this.handleImageClick} />
          </ImageGallery>
        )}

        {totalHits === images.length ? null : (
          <Button onLoadMoreClick={this.handleLoadMore} disabled={disabled} />
        )}
        {modalOpen && (
          <Modal onClose={this.handleModalClose}>
            <img src={images[selectedImageIndex].largeImageURL} alt="" />
          </Modal>
        )}
      </section>
    );
  }
}

// .App {
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 16px;
//   padding-bottom: 24px;
// }
