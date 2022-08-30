import React from 'react'
import "./Blog.css"

const Blog = () => {

    return (
        <div>
            <h2 className='text-5xl text-center font-semibold my-12'>Our Latest Blog</h2>
            <div className='grid grid-cols-3 border-red-500 text-white bg-gray-800'>
                <div className="card ">
                    <div className="card-body">
                        <h2 className="card-title">
                            <img className='w-full' src="https://mysterio.yahoo.com/mysterio/api/4BE2617D6A44B483DBC86BC73862109867E1A1123D133B7C8519B4E449DFCA42/autoblog/resizefill_w450_h253;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/08/27192340/2023_gmc_sierra_3500_hd.png" alt="" />
                        </h2>
                        <p className='text-3xl'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">2023 GMC Sierra HD MSRP up at least $1,000</a>
                        </p>

                        <span className='font-mono'>Sierra 1500 prices will go up as well, but not clear by how much yet.....</span>
                        <span className='font-serif text-yellow-100'>JONATHON RAMSEY / 16 HRS AGO</span>
                        <div className="card-actions justify-end">
                            <button className="btn btn-active btn-link text-xl">Read Full Blog</button>
                        </div>
                    </div>
                </div>


                <div className="card ">
                    <div className="card-body">
                        <h2 className="card-title">
                            <img src="https://mysterio.yahoo.com/mysterio/api/87695BD86E329030F11DD4777B022E28467B1B5D880DDBBF62DBFDB77774E511/autoblog/resizefill_w450_h253;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/08/23165500/p744.jpg" alt="" />
                        </h2>
                        <p className='text-3xl'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Dodge goes electric in style | Autoblog Podcast #744</a>
                        </p>

                        <span className='font-mono'>Plus a Pebble Beach recap, and an electric 'Spend My Money' segment......</span>
                        <span className='font-serif text-yellow-100'>AUTOBLOG STAFF / 2 DAYS AGO</span>
                        <div className="card-actions justify-end">
                            <button className="btn btn-active btn-link text-xl">Read Full Blog</button>
                        </div>
                    </div>
                </div>

                <div className="card ">
                    <div className="card-body">
                        <h2 className="card-title">
                            <img src="https://mysterio.yahoo.com/mysterio/api/1071B728736F7415702DDFC133B038D86104D112EA0264DFA150839AEAD38099/autoblog/resizefill_w450_h253;quality_85;format_webp;cc_31536000;/https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/08/26043509/2023_Genesis_Electrified_G80.jpg" alt="" />
                        </h2>

                        <p className='text-3xl'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">2023 Electrified Genesis G80 priced at $80,920</a>
                        </p>

                        <span className='font-mono'>Only one trim that comes fully loaded......</span>
                        <span className='font-serif text-yellow-100'>AUTOBLOG STAFF /6 DAYS AGO</span>
                        <div className="card-actions justify-end">

                            <button className="btn btn-active btn-link text-xl">Read Full Blog</button>
                        </div>
                    </div>
                </div>


            </div>

            {/* ----------------------------------------------------------------------------------------------------------------- */}

            <div className='my-20'>
                <h2 className='text-center text-4xl my-10 font-mono'>Company Blog</h2>

                <div className='grid lg:grid-cols-6 gap-5 lg:w-10/12 mx-auto'>
                    <div className=''>
                        <img src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=ca62c56e72e4fb463335cfbc3741500bcc554252&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims3%2FGLOB%2Flegacy_thumbnail%2F1062x597%2Fformat%2Fjpg%2Fquality%2F100%2Fhttps%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2022%2F08%2F12152934%2F2023-VW-ID.4-front-three-quarter.jpg&thumbnail=360%2C360&quality=85" alt="" />
                        <p className='underline'>Money matters made easy for your understanding presented with expert opinion and in-sights</p>
                        <span>LAWRENCE ULRICH / 14 HRS AGO</span>
                    </div>

                    <div className=''>
                        <img src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=6a265394d40adf5c625b42899f849f08266b3d83&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims3%2FGLOB%2Flegacy_thumbnail%2F1062x597%2Fformat%2Fjpg%2Fquality%2F100%2Fhttps%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2022%2F07%2F13104228%2FCanoo1.jpeg&thumbnail=360%2C360&quality=85" alt="" />
                        <p className='underline'>Money matters made easy for your understanding presented with expert opinion and in-sights</p>
                        <span>LAWRENCE ULRICH / 14 HRS AGO</span>
                    </div>


                    <div className=''>
                        <img src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=f715c400e954ddafacf97892516b03126564289f&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims3%2FGLOB%2Flegacy_thumbnail%2F1062x597%2Fformat%2Fjpg%2Fquality%2F100%2Fhttps%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2022-08%2Fceed3cb0-19c1-11ed-9fff-4a2f38761697&thumbnail=360%2C360&quality=85" alt="" />
                        <p className='underline'>Money matters made easy for your understanding presented with expert opinion and in-sights</p>
                        <span>LAWRENCE ULRICH / 14 HRS AGO</span>
                    </div>


                    <div className=''>
                        <img src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=adc2808bdaaa0238cac01d24e168c1a2b661b3e2&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims3%2FGLOB%2Flegacy_thumbnail%2F1062x597%2Fformat%2Fjpg%2Fquality%2F100%2Fhttps%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2022%2F04%2F18140240%2FIMG_7902.jpg.jpg&thumbnail=360%2C360&quality=85" alt="" />
                        <p className='underline'>Money matters made easy for your understanding presented with expert opinion and in-sights</p>
                        <span>LAWRENCE ULRICH / 14 HRS AGO</span>
                    </div>


                    <div className=''>
                        <img src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=4224e86ef3b8e6643ac394dacccbc4b22188f7a7&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims3%2FGLOB%2Flegacy_thumbnail%2F1062x597%2Fformat%2Fjpg%2Fquality%2F100%2Fhttps%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2022%2F05%2F16105536%2FC_005-scaled.jpg&thumbnail=360%2C360&quality=85" alt="" />
                        <p className='underline'>Money matters made easy for your understanding presented with expert opinion and in-sights</p>
                        <span>LAWRENCE ULRICH / 14 HRS AGO</span>
                    </div>

                    <div className=''>
                        <img src="https://s.aolcdn.com/images/dims?client=fh7w6q744eiognjk&signature=e1524f6b24988db6f88552061402a955f3768e0e&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims3%2FGLOB%2Flegacy_thumbnail%2F1062x597%2Fformat%2Fjpg%2Fquality%2F100%2Fhttps%3A%2F%2Fs.aolcdn.com%2Fos%2Fab%2F_cms%2F2022%2F08%2F05171449%2FLucid-Air-Stealth-Look-group.jpg&thumbnail=360%2C360&quality=85" alt="" />
                        <p className='underline'>Money matters made easy for your understanding presented with expert opinion and in-sights</p>
                        <span>LAWRENCE ULRICH / 14 HRS AGO</span>
                    </div>



                </div>
            </div>


        </div>
    )
}


export default Blog