import moment from 'moment/moment';
import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const NewsCard = ({ news }) => {

    const { _id, title, thumbnail_url, image_url, details, author, total_view, rating, category_id, others_info } = news
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: 40 }} src={author?.img} roundedCircle />

                    <div className='ps-2 flex-grow-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small> {moment(author?.published_date).format("yyy-mm-D")}</small></p>

                    </div>
                    <div>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" />
                    <Card.Text>
                        {
                            details.length < 250 ?
                                <>{details}</>
                                :
                                <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1 d-flex align-items-center'>
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={Math.round(rating?.number || 0)}
                            readOnly>
                        </Rating>
                        <span className='ps-2'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;