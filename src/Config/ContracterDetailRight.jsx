import { BiEdit } from "react-icons/bi";

 const rightSideData=[
    {
        left:'Working Hours:',
        right:'10 hrs, Mon-Fri'
    },
    {
        left:'Area of Coverage:',
        right:'+ 5 Miles (centre of Birmingham)'
    },
    {
        left:'Agreed Rate:',
        right:'300 per hour, Total: 3000'
    },
    {
        left:'Approved By:',
        right:'Tehseen'
    },
    {
        left:'Associated Group:',
        right:'SRNEW4126'
    },
    {
        left:'Priority Level:',
        p1:<p className='bg-[#38bf67] px-[2px] text-white text-sm rounded-sm'>p1</p>,
        use:'Use as first Choice',
        icons:<div className='bg-[#38bf67] ml-12 rounded-sm text-white font-bold p-1'><BiEdit/></div>

    },
    {
        left:'Note:',
        right:'Lorem ipsum dolor sit amet consetet…',
        btn:'Read More'
    }
]

export default  rightSideData;