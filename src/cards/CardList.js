import cards from './cards.json'

const CardList = ({cardData}) => {
    return (
        <section className="pb-5">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {cards
                        .filter(card => cardData === "all" || cardData === card.category)
                        .map((card, index) =>
                        <div className="col mb-5" key={index}>
                            <div className="card h-100">
                                <img className="card-img-top" src={card.img} alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{card.title}</h5>
                                        <p className="small text-muted">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CardList;
