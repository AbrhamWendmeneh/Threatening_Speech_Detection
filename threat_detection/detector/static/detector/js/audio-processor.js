// detector/static/detector/js/audio-processor.js
class AudioProcessor extends AudioWorkletProcessor {
    process(inputs) {
      const input = inputs[0]
      if (input?.[0]) {
        this.port.postMessage(input[0])
      }
      return true
    }
  }
  
  registerProcessor('audio-processor', AudioProcessor)