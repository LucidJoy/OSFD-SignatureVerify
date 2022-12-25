import "../styles/globals.css";

const RootLayout = ({ children }) => (
  <html
    lang='en'
    className='scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-slate-500 '
  >
    <head>
      <link rel='preconnect' href='https://stijndv.com' />
      <link
        rel='stylesheet'
        href='https://stijndv.com/fonts/Eudoxus-Sans.css'
      />
    </head>
    <body className='bg-[#111827] h-screen'>{children}</body>
  </html>
);

export default RootLayout;
