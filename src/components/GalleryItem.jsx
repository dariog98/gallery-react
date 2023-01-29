import { Link } from "react-router-dom";

function GalleryItem({data}) {
    return (
        <Link to={`/${data.id}`} className="photo-box">
            <img src={data.urls.regular} alt={data.title}/>
            {/*
                data.alt_description &&
                <div className="photo-box-content">
                    {data.alt_description}
                </div>
            */}
        </Link>
    )
}

export default GalleryItem;