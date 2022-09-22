import { useCallback, useEffect, useState } from 'react'
import { getBeers } from './api/fetchData';
import Card from './components/Card';
import Loadmore from './components/Loadmore';
import Modal from './components/Modal';
import PageLoader from './components/PageLoader';


function App() {
  let timer;
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal]= useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [pagination, setPagination] = useState({
    page:1,
    perPage:10
  });

  // Fetching all Beers List
  const fetchBeers = async (page, perPage) => {
     setLoading(true);
     const response =  await getBeers(page, perPage);
     if(response){
        if(beers.length > 0){
          setBeers([...beers, ...response]);
        }else{
          setBeers(response);
        }    
        setLoading(false);
        return true;
     }else{
      setLoading(false);
      return false;
     }
  }

  const onLoadMoreButtonClick = () => {
    const { page, perPage } = pagination;
    let currPage = page;
    currPage++;
    if(fetchBeers(currPage, perPage)){
  
      setPagination({
        ...pagination,
        page: currPage
      });

      setTimeout(()=>{
        onScrollToView();
      }, 200)
    }
     

  }

  const onCardClick = useCallback((data) => {
    setSelected(data);
    document.body.style.overflow = "hidden";
    setShowModal(true)
  },[])

  const onModalCloseClick = () => {
    setSelected(null);
    document.body.style.overflow = "auto";
    setShowModal(false);
  }

  const onScrollToView = () => {
    const addedLists =  document.querySelectorAll('.card-wrapper');
    const scrollToIndex = (pagination.perPage * pagination.page) - 1;
    console.log(scrollToIndex);
    window.scrollTo(0, addedLists[scrollToIndex].offsetTop + addedLists[scrollToIndex].clientHeight )
  }

  useEffect(()=>{
    fetchBeers(pagination.page, pagination.perPage);
  },[])

  useEffect(()=>{
    if(beers.length !== 0){
      timer = setTimeout(()=>{
        setShowLoader(false);
      }, 2000)
    }
    ()=>{
      clearTimeout(timer);
    }
  },[beers]);


  return (
    <div className="houz-app">
      {showLoader && <PageLoader/>}

      <div className='container'>
        <h2 className='header'>Beers</h2>
        <div className='row'>
          {beers.map(beer=>{
            return (
              <div className='col-12 col-md-6 mb-30 card-wrapper' key={beer.id}>
                <Card data={beer} isSelected={!!(selected && (selected.id === beer.id))} action={onCardClick}/>
              </div>
            )
          })}
        </div>
        <Loadmore action={onLoadMoreButtonClick} loading={loading}/>
      </div>
     
      {showModal && <Modal data={selected} action={onModalCloseClick}/>}
    </div>
  )
}

export default App
