const CardList = ({ data }) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {data.map((item) => {
            const { id, title, body } = item;
            return (
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <div className="card-body" key={id}>
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{body.split(0, 150)}...</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardList;
