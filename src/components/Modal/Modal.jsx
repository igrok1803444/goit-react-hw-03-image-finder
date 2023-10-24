import { Component } from 'react';

export class Modal extends Component {
  render() {
    const { largeImageURL, tags } = this.props.image[0];
    return (
      <div class="Overlay">
        <div class="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
