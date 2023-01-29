import { Link } from "react-router-dom";
import { HeartIcon, UserIcon } from '@heroicons/react/24/solid'

function GalleryItem({data}) {

    return (
        <Link to={`/${data.id}`} className="photo-box">

            <img src={data.urls.regular} alt={data.title}/>

            <div className="photo-box-content">
                <div className="h-100 flex align-items-center justify-content-between px-1">
                    <div className="flex gap-1">
                        <div className="flex align-items-center gap-05">
                            <div style={{width: "1rem", height: "1rem"}}>
                                <HeartIcon/>
                            </div>
                            <div>{data.likes}</div>
                        </div>
                    </div>

                    <div className="flex align-items-center gap-05">
                        <div style={{width: "1rem", height: "1rem"}}>
                            <UserIcon/>
                        </div>
                        <div className="uppercase">{data.user.name}</div>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default GalleryItem;