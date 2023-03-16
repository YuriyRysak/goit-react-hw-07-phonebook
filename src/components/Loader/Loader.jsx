
import { RotatingTriangles } from 'react-loader-spinner';
import css from './Loader.module.css';



export const Loader = () => (
  <div className={css.loader}>    
      <RotatingTriangles
        visible={true}
        height="180"
        width="180 "
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );


