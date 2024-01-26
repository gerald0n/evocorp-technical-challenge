export default function BackgroundImage({baseUrl, pathImage}: {baseUrl: string; pathImage: string}) {
   return (
      <div
         className="w-full min-h-screen absolute blur-3xl -z-10"
         style={{
            backgroundImage: `url(${baseUrl}/original${pathImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top'
         }}
      ></div>
   )
}
