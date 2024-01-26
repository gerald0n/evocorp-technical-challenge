function handleConversionOfminutesToHours(minutes: number) {
   if (isNaN(minutes) || minutes < 0) {
      return 0
   }

   const hours = Math.floor(minutes / 60)
   const minutesRemaining = minutes % 60

   return `${hours} h e ${minutesRemaining} min`
}

export { handleConversionOfminutesToHours }
