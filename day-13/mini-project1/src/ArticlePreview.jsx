import PropTypes from 'prop-types'

function ArticlePreview(props){

    return(
        <>
     
        <div className="article">
            <img src={props.img} alt="image" className="img" />
            <h1 className="head1">{props.title}</h1>
            <h3 className="head2">{props.author}</h3>
            <p className="para">{props.preview}</p>
        </div>
        </>
        
    )

}

ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    img: PropTypes.string, 
  };

  ArticlePreview.defaultProps ={
    title: '#none',
    author: '#none',
    preview: '#none',
    img: '#none', 

  }

export default ArticlePreview