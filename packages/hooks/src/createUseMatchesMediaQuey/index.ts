import { useSyncExternalStore } from "react"


/**
 * 
 * @param matchQuery
 * @example 
 * createUseIsMatchMedia("(min-width: 600px)")
 */
export default function createUseIsMatchMedia(matchQuery: string){
  
  const listeners = new Set<()=>void>();

  const emit = ()=>{
    listeners.forEach(listener=>listener())
  }

  const match = matchMedia(matchQuery)

  const subscribe = (onStoreChange: () => void)=>{
    if(!listeners.size){
      match.addEventListener("change", emit)
    }

    listeners.add(onStoreChange)

    return ()=>{
      listeners.delete(onStoreChange)
      if(!listeners.size){
        match.removeEventListener("change", emit)
      }
    }
  }

  const getSnapShot = ()=>{
    return match.matches;
  }


  return ()=>useSyncExternalStore(subscribe, getSnapShot);
   
}