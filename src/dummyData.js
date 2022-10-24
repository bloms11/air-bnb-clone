import {
    MdOutlineHouseboat, 
    MdOutlineBeachAccess, 
    MdOutlineKitesurfing, 
    MdSportsGolf
} from 'react-icons/md'
import {
    GiSkier, 
    GiUndergroundCave, 
    GiGrandPiano, 
    GiVikingLonghouse, 
    GiBarn, 
    GiGrapes, 
    GiCampingTent, 
    GiPoolDive, 
    GiTreehouse, 
    GiModernCity
} from 'react-icons/gi'
import {VscSymbolColor} from 'react-icons/vsc'
import {TbSailboat, TbSnowflake} from 'react-icons/tb'
import {BiBuildingHouse, BiLandscape} from 'react-icons/bi'
import {RiSpaceShipLine} from 'react-icons/ri'
import { 
    arcticInfo, 
    barnsInfo, 
    beachInfo, 
    boatInfo, 
    campingInfo, 
    cavesInfo, 
    citiesInfo, 
    designInfo, 
    golfingInfo, 
    houseboatsInfo, 
    mansionsInfo, 
    pianosInfo, 
    poolInfo, 
    skiInfo, 
    spacesInfo, 
    surfingInfo, 
    treehouseInfo, 
    viewsInfo, 
    vineyardInfo,
    omgInfo } from './directory'


export const locationTabs = [
    {id: 1, label: 'Design', data: designInfo, icon: <BiBuildingHouse size={24}/>,},
    {id: 2, label: 'OMG', data: omgInfo, icon: <RiSpaceShipLine size={24}/>},
    {id: 3, label: 'Beach', data: beachInfo, icon: <MdOutlineBeachAccess size={24}/>},
    {id: 4, label: 'Amazing Pools', data: poolInfo, icon: <GiPoolDive size={24}/>},
    {id: 5, label: 'Mansion', data: mansionsInfo, icon: <GiVikingLonghouse size={24}/>},
    {id: 6, label: 'Arctic', data: arcticInfo, icon: <TbSnowflake size={24}/>},
    {id: 7, label: 'Amazing views', data: viewsInfo, icon: <BiLandscape size={24}/>},
    {id: 8, label: 'Surfing', data: surfingInfo, icon: <MdOutlineKitesurfing size={24}/>},
    {id: 9, label: 'Caves', data: cavesInfo, icon: <GiUndergroundCave size={24}/>},
    {id: 10, label: 'Grand pianos', data: pianosInfo, icon: <GiGrandPiano size={24}/>},
    {id: 11, label: 'Creative spaces', data: spacesInfo, icon: <VscSymbolColor size={24}/>},
    {id: 12, label: 'Houseboats', data: houseboatsInfo, icon: <MdOutlineHouseboat size={24}/>},
    {id: 13, label: 'Boat', data: boatInfo, icon: <TbSailboat size={24}/>},
    {id: 14, label: 'Ski-in/out', data: skiInfo, icon: <GiSkier size={24}/>},
    {id: 15, label: 'Barns', data: barnsInfo, icon: <GiBarn size={24}/>},
    {id: 16, label: 'Vineyard', data: vineyardInfo, icon: <GiGrapes size={24}/>},
    {id: 17, label: 'Camping', data: campingInfo, icon: <GiCampingTent size={24}/>},
    {id: 18, label: 'Treehouses', data: treehouseInfo, icon: <GiTreehouse size={24}/>},
    {id: 19, label: 'Iconic cities', data: citiesInfo, icon: <GiModernCity size={24}/>},
    {id: 20, label: 'Golfing', data: golfingInfo, icon: <MdSportsGolf size={24}/>},
]
