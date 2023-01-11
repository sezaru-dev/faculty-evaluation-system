const timelineCat1 = document.querySelector('#timelineCat1');
const timelineCat2 = document.querySelector('#timelineCat2');
const timelineCat3 = document.querySelector('#timelineCat3');
const timelineRemarks = document.querySelector('#timelineRemarks');

function timeline2Active() {
	timelineCat2.innerHTML = `
      <div class="flex items-center justify-center">
         <div class="w-14 h-[3px] bg-[#48bb81]"></div>
         <div class="w-10 h-10 border-[3px] rounded-full bg-[#48bb81] border-[#48bb81] flex justify-center items-center">
            <strong class="text-white ">2</strong>
         </div>
         <div class="w-14 h-[3px] bg-[#48bb81]"></div>
      </div>
      <small class="mt-2 text-[#48bb81]">Category II</small>
   `;
}
function timeline3Active() {
	timelineCat3.innerHTML = `
      <div class="flex items-center justify-center">
         <div class="w-14 h-[3px] bg-[#48bb81]"></div>
         <div class="w-10 h-10 border-[3px] rounded-full bg-[#48bb81] border-[#48bb81] flex justify-center items-center">
            <strong class="text-white ">3</strong>
         </div>
         <div class="w-14 h-[3px] bg-[#48bb81]"></div>
      </div>
      <small class="mt-2 text-[#48bb81]">Category III</small>
   `;
}

function timelineRemarksActive() {
	timelineRemarks.innerHTML = `
      <div class="flex items-center justify-center">
         <div class="w-14 h-[3px] bg-[#48bb81]"></div>
         <div class="w-10 h-10 border-[3px] rounded-full bg-[#48bb81] border-[#48bb81] flex justify-center items-center">
            <strong class="text-white ">4</strong>
         </div>
         <div class="w-14 h-[3px] bg-[#48bb81]"></div>
      </div>
      <small class="mt-2 text-[#48bb81]">Remarks</small>
   `;
}

function timeline2Off() {
	timelineCat2.innerHTML = `
      <div class="flex items-center justify-center">
         <div class="w-14 h-[3px] bg-blk-25"></div>
         <div class="w-10 h-10 border-[3px] rounded-full bg-white border-blk-25 flex justify-center items-center">
            <strong class="text-blk-25 ">2</strong>
         </div>
         <div class="w-14 h-[3px] bg-blk-25"></div>
      </div>
      <small class="mt-2 text-blk-25">Category II</small>
   `;
}
function timeline3off() {
	timelineCat3.innerHTML = `
      <div class="flex items-center justify-center">
         <div class="w-14 h-[3px] bg-blk-25"></div>
         <div class="w-10 h-10 border-[3px] rounded-full bg-white border-blk-25 flex justify-center items-center">
            <strong class="text-blk-25 ">3</strong>
         </div>
         <div class="w-14 h-[3px] bg-blk-25"></div>
      </div>
      <small class="mt-2 text-blk-25">Category III</small>
   `;
}

function timelineRemarksoff() {
	timelineRemarks.innerHTML = `
      <div class="flex items-center justify-center">
         <div class="w-14 h-[3px] bg-blk-25"></div>
         <div class="w-10 h-10 border-[3px] rounded-full bg-white border-blk-25 flex justify-center items-center">
            <strong class="text-blk-25 ">4</strong>
         </div>
         <div class="w-14 h-[3px] bg-blk-25"></div>
      </div>
      <small class="mt-2 text-blk-25">Remarks</small>
   `;
}
