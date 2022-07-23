import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import loadingGif from '../assets/loading.gif';
import {useSelector,useDispatch} from 'react-redux'
import React from 'react';
import { clearNewsList, getNews } from '../features/newsSlice';
import "./news.css"


const News = () => {
  const dispatch = useDispatch();
  const {newsList,loading}=useSelector(state=>state.news)
  React.useEffect(()=>{
    dispatch(getNews())
    return()=>{
      dispatch(clearNewsList())
    }
  },[])

  return (
    <>
      {loading &&  <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>}
      {!loading && (<Box
        xs={{ d: 'flex' }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        
        {newsList?.map((item, index) => (
          <Card sx={{ maxWidth: 345, m: 5, maxHeight: 550,minWidth:345,minHeight:550 }} key={index}>
            <CardMedia
              component="img"
              height="250"
              image={item?.image_url}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="desc">
                {item?.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" href={item?.link} target="_blank">
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>)}
    </>
  );
};

export default News;
