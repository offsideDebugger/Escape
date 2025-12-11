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
                    &#34; I Saw Them &#34;
                </div>
                <div className="border text-md md:text-2xl leading-6 md:leading-8 lg:leading-12 sm:w-xl md:w-3xl lg:w-4xl mx-auto tracking-normal font-poem text-chars border-accent text-center transition duration-200 bg-cards p-6 rounded-lg shadow-md cursor-pointer shadow-cards/20 ">
                      
                        They love the shadows, calling it light,<br/>
                        Chasing quick sparks that die in the night.<br/>
                        Like Icarus soared, seeking the bliss,<br/>
                        Blinded by heaven, yet falling to abyss.<br/>
                        
                        People more like conmen who seek fleeting pleasure,<br/>
                        End up in ruins, mistaking pain for treasure.<br/>
                        The same ones call me a madman, out of spite,<br/>
                        For chasing my peace in what feels right.<br/>

                        I say everything&#39;s fine,is it ?
                </div>
            </div>
          </div>
        </div>
}