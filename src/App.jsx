import TvShowApi from "./api/tv-show";
import css from "./global.css"
import s from "./style.module.css"
const App = () => {
    TvShowApi.fetchPopular()
    return ( 
        <div className={s.main_container}>
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <div>Logo</div>
                        <div>Subtil</div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <input style={{width:"100%"}} type="text" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>

            </div>
            <div className={s.recommentations}>

            </div>
        </div>
     );
}
 
export default App;