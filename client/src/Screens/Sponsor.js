import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';
import imageone from '../Assets/imageone.jpg';
import imagetwo from '../Assets/imagetwo.png';
import imagethree from '../Assets/imagethree.png';
import imagefour from '../Assets/imagefour.png';
import imagefive from '../Assets/imagefive.jpg';
import imagesix from '../Assets/imagesix.png';
import imageseven from '../Assets/imageseven.png';
import imageeight from '../Assets/imageeight.jpg';
import imagenine from '../Assets/imagenine.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

//const Sponsor = () => {
//    return (
//        <div>


            
//        </div>
//    )
//}

//export default Sponsor



  //import image from '../Assets/Logo.png';
 
  const tileedata = [
    {
      img: imageone
    },
    {
      img: imagetwo
    },
    {
      img: imagethree
    },
    {
      img: imagefour
    },
    {
      img: imagefive
    },
    {
      img: imagesix
    },
    {
      img: imageseven
    },
    {
      img: imageeight
    },
    {
      img: imagenine
    }

  ]
 
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div>
        {tileedata.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img}  />
            
          </GridListTile>
        ))}
      
    </div>
  );
}
