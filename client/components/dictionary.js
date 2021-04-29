import React from 'react'
import Dict from '../dict/parser'

export class Dictionary extends React.Component {
  constructor() {
    super()
    this.dictionary = Dict
  }
  render() {
    return <div>{this.dictionary}</div>
  }
}
