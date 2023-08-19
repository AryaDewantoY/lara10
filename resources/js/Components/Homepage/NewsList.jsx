const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478_1280.jpg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const Nonews = () => {
    return (
        <div>
            <h2>Belum ada berita terbaru</h2>
        </div>
    );
};

const NewsList = ({ news }) => {
    return !news ? Nonews() : isNews(news);
};

export default NewsList;
