import { Carousel } from "primereact/carousel"
import "./styles.css"
import Img from "@assets/img.png"
import { useMediaQuery } from 'react-responsive';


const casos = [{
    title: "string",
    logo: "string"
},
{
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
}, {
    title: "string",
    logo: "string"
},
]

const CardCarouselBlog = () => {
    return (
        <div className="card-blog">
            <img src={Img} />
            <div className="text-blog">
                <h4>Modularidade inovadora</h4>
                <p>A estrutura modular permite a criação passo a passo do banco digital, adaptando-se às necessidades específicas de cada cliente. Essa flexibilidade garante uma implementação eficiente e escalável.</p>
                <button>Ler mais</button>
            </div>
        </div>
    )
}

export const Blog = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <div className="blog-container" id="blog">
            <Carousel  title="Confira nosso blog" numVisible={isMobile ? 1 : 4} value={casos} itemTemplate={CardCarouselBlog} indicatorsContentClassName="indicator-carousel-blog" />
        </div>
    )
}
