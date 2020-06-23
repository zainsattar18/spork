import React, { Component } from 'react'
import '../css/Main.css'
import arrowRight from '../images/right-arrow.png'
import arrowLeft from '../images/left-arrow.png'

export default class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImageIndex: 0,
            images: null,
            arrowNext: arrowRight,
            arrowPrev: arrowLeft,
        }
    }

    componentDidMount() {
        this.setState({
            images: this.props.data
        })
    }

    prevSlide = () => {
        const lastIndex = this.props.data.length - 1
        const resetIndex = this.state.currentImageIndex === 0
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1
        this.setState({
            currentImageIndex: index
        })
    }

    nextSlide = () => {

        const lastIndex = this.props.data.length - 1
        const resetIndex = this.state.currentImageIndex === lastIndex
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1
        this.setState({
            currentImageIndex: index
        })
    }

    render() {
        const index = this.state.currentImageIndex

        let firstImages = this.props.data && this.props.data.slice(index, index + 4)
        if (firstImages && firstImages.length < 4) {
            firstImages = firstImages.concat(this.props.data.slice(0, 4 - firstImages.length))
        }


        return (
            <div className="carousel-container">
                <h2>{this.props.title}</h2>
                <div className="carousel">
                    <img src={this.state.arrowPrev} onClick={this.prevSlide} className="carousel-arrow" />
                    {firstImages && firstImages.length > 0 && firstImages.map((image, index) => <img key={index} src={image.imgUrl} alt="featured recipes" className="carousel-image" />)}
                    <img src={this.state.arrowNext} onClick={this.nextSlide} className="carousel-arrow" />

                </div>
            </div>
        )
    }
}
