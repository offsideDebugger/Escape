export default function Home() {
    return <div className="bg-base h-screen flex font-headers">
          <div className="mx-auto w-5xl p-6 sm:px-12 lg:px-16 border-x border-neutral-900 flex flex-col h-screen overflow-y-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent mt-10 sm:mt-22 lg:mt-30">
              Escape
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-muted">
              Because I write sometimes.
            </p>
            <div className="mt-20 md:mt-16 lg:mt-20 flex gap-14 flex-col text-center justify-center">
                <div className="text-accent text-4xl font-bold underline decoration-accent/30 decoration-2 underline-offset-8">
                    &#34; Splendid Isolation &#34;
                </div>
                <div className="border overflow-x-hidden text-md md:text-2xl leading-6 md:leading-8 lg:leading-12 sm:w-xl md:w-3xl lg:w-4xl mx-auto tracking-normal font-poem text-chars border-accent text-center transition duration-200 bg-cards p-6 rounded-lg shadow-md cursor-pointer shadow-cards/20 ">
                      
                    Staring at the wall, away from noise, <br/>
                    Silence is splendid, this is my joy. <br/>

                    I didn&#39;t choose this path, or maybe I did ? <br/>
                    I overdid it when it wasn&#39;t needed, <br/>
                    Clock wheeled, got distant, yes, maybe I did. <br/>

                    Tired of putting people above me, <br/>
                    Isolation chose me, or maybe I chose it ? <br/>
                    Though I answer myself now, no pleasing praises, <br/>
                    I prefer these loud whispers, yes maybe I chose it. <br/>

                    There might be a way to cure this splendid isolation, <br/>
                    But do I need to? Maybe I don&#39;t?
                </div>
            </div>
          </div>
        </div>
}