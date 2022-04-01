const {exec} = require('child_process');
const temp= new Date().valueOf();
exec(`ffmpeg -n -loglevel error -i input.mp4 -vcodec libx264 -crf 30 -preset faster -tune film ${temp}.mp4`,(error,stdout,stderr)=>{
  if(error){
    console.log(`error:${error.message}`);
    return;
  }
  else if (stderr){
    console.log(`stderr:${stderr}`);
  return;
  }
  console.log(`stdout:${stdout}`);
});