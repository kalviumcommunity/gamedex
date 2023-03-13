import "./loading.css"

function loading() {

    return (
        <div className="container_loading">
            <div>
                <h1>
                    Loading...
                </h1>
                <div className="loaderContainer">
                    <div className="loaderBox"></div>
                    <div className="loaderBox"></div>
                    <div className="loaderBox"></div>
                    <div className="loaderBox"></div>
                    <div className="loaderBox"></div>
                </div>
            </div>
        </div>
    );
}

export default loading;