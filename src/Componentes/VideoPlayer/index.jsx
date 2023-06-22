import styles from './styles.module.css';
import { VIDEOS } from './../../data/VIDEOS';
import { useState, useEffect, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { clsx } from 'clsx';
import { IconsLeft } from '../IconsVideo/index';
import { Description } from '../DescripcionVideo';
// import {} from "";
// import { Prueba } from "./IconAction";

//recorrer cada video y adjuntar al useState
export function ListarVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(VIDEOS);
  }, []);
  // console.log(videos);

  return (
    <>
      {videos.map((e, index) => {
        return <ComponenteVideo key={index} elm={e} />;
      })}
    </>
  );
}
function ComponenteVideo({ elm }) {
  const refVideo = useRef();
  const [playing, setPlaying] = useState();
  function handlePlay() {
    if (playing) {
      refVideo.current.pause();
    } else {
      refVideo.current.play();
    }
    setPlaying(!playing);
    // console.log(iconP);
  }
  const playerClassName = clsx(styles.iconPlay, {
    [styles.pause]: playing
  });
  return (
    <section className={styles.section}>
      {/* se puso el onclick por el z-index */}
      {/* error POSICION de componentes afecta mucho */}
      <Description elm={elm} />
      <IconsLeft elm={elm} />
      <FaPlay className={playerClassName} onClick={handlePlay} />
      {/* playsinline="true" x5-playsinline="true" webkit-playsinline="true" mediatype="video" data-xgplayerid="995bbd3d-a4ad-4ebd-8d7d-0cfd07e96820 */}
      <video
        playsInline={true}
        onClick={handlePlay}
        ref={refVideo}
        controls={false}
        src={elm.srcV}
        loop></video>
    </section>
  );
}
