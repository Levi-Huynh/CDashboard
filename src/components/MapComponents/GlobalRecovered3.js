class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
            name: "Global Recovered Cases",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: ' ',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          tooltip: {
            x: {
              format: 'MM/dd'
            },
          },
          xaxis: {
            type: 'datetime',

            categories: [ ],
          }
        },
      
      
      };
    }

    componentDidUpdate(prevProps){
        if(this.props.global30 !== prevProps.global30){
            console.log('CDU INVOKED', this.props.global30)
          this.setState({
            
              options: {...this.state.options,  yaxis: {...this.state.options.yaxis, max: this.props.global30.max, min:this.props.global30.min}, xaxis:{...this.state.options.xaxis, categories: this.props.global30.xAxis}}
              
                      
              
          })
    
          this.setState({
            series: update(this.state.series, { 0:{data:{$set: this.props.global30.dataCases}}, 1:{data:{$set: this.props.global30.dataDeaths}}, 2:{data:{$set: this.props.global30.dataRecovered}}  })
          })
    
       
      
    }
    
    console.log("30 CDU SERIES STATE GLOBAL 30:",  this.state.series, "CDU global30 PROPS:", this.props.global30, this.state.options.xaxis, this.state.options.yaxis)
    
      }
    
  

    render() {
      return (
        

  <div id="chart">
<Recovered options={this.state.options} series={this.state.series} type="line" height={350} width={700} />
</div>

      )}}

export default Recovered;