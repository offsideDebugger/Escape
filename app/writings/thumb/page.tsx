export default function Home() {
    return <div className="bg-base min-h-screen flex font-headers">
          <div className="mx-auto w-5xl p-6 sm:px-12 lg:px-16 border-x border-neutral-900 flex flex-col min-h-screen overflow-y-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent mt-10 sm:mt-22 lg:mt-30">
              Escape
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-muted">
              Because I write sometimes.
            </p>
            <div className="mt-20 md:mt-16 lg:mt-20 flex gap-14 flex-col text-center justify-center">
                <div className="text-accent text-4xl font-bold underline decoration-accent/30 decoration-2 underline-offset-8">
                    &#34; The Thumb &#34;
                </div>
                <div className="border text-md md:text-2xl leading-6 md:leading-8 lg:leading-12 sm:w-xl md:w-3xl lg:w-4xl mx-auto tracking-normal font-poem text-chars border-accent text-center transition duration-200 bg-cards p-6 rounded-lg shadow-md cursor-pointer shadow-cards/20 ">
                      
                        Silence hits even inside the tribe,<br/>
                        Away from kith, I chose the divide.<br/>
                        Living it, owning it, Icarus in stride,<br/>
                        Chasing burn just to feel alive.<br/>

                        I don&#39;t serve. I&#39;m Pollex, the crown.<br/>
                        Closest to the sun, head too far up, down.<br/>

                        Wrong train clanked, perception slammed,<br/>
                        Even a thumb ain&#39;t shit without the hand !
                </div>
            </div>
          </div>
        </div>
}