import './style.css'

import images from '../../data/images'
import suitableImages from '../../data/suitableImages';
import recentlyImages from '../../data/recentlyImages';
import relatedImages from '../../data/relatedImages';

import HeaderImage from "../../components/header/HeaderImage"
import CardPicture from "../../components/Card/CardPicture/CardPicture"
import ImageInput from '../../components/input/imageInput/ImageInput';
import DemoFooter from '../../components/footer/DemoFooter';

export default function ImagePage() {
    return (
        <>
            <HeaderImage />
            <ImageInput />

            <div className='my-header'>The most suitable images</div>
            {
                suitableImages.map(image => (
                    <CardPicture imgName={image.name} imgUrl={image.url} />
                ))
            }

            <div className='my-header'>Recent images</div>
            {
                recentlyImages.map(image => (
                    <CardPicture imgName={image.name} imgUrl={image.url} />
                ))
            }

            <div className='my-header'>Related images</div>
            {
                relatedImages.map(image => (
                    <CardPicture imgName={image.name} imgUrl={image.url} />
                ))
            }

            <DemoFooter />
        </>
    )
}