import { Link } from "@inertiajs/react";

const Pagination = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
            <div className="btn-group">
                {prev &&<Link href={prev} className="btn btn-item">«</Link>}
                <Link className="join-item btn">{current}</Link>
                {next &&<Link href={next} className="btn btn-item">»</Link>}
            </div>
    );
};

export default Pagination;
