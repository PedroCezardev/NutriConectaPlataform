import React from 'react'
import style from "./Dashboard.module.css";
import Content from "../../Components/Content/Content";
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/Navbar/NavBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const ItemOne = styled(Paper)(({ theme }) => ({
  backgroundColor: 'var(--color-grafics)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text === '#e65a00',
  textAlign: 'center',
  flexDirection: 'column',
  width: '190px',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: theme.spacing(2.5),
  borderRadius: '10px',
}));

const ItemTwo = styled(Paper)(({ theme }) => ({
  backgroundColor: 'var(--color-grafics)',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  color: '#fff',
  textAlign: 'center',
  flexDirection: 'column',
  width: '380px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: theme.spacing(2),
  borderRadius: '10px',
}));

// estilização do grafico de rosca
const settings = {
  width: 200,
  height: 200,
  value: 60,
  innerRadius:"70%",
  outerRadius:"110%",
};

const Dashboard = () => {
  return (
    <>
    <NavBar/>
      <div className={style.body}>
        <SideBar />

        <Content> 
          <section className={style.container}>
            <div className={style.title}>
              <h1>Dashboard</h1>
            </div>
            <section className={style.grid}>
              <React.Fragment>
                <Grid item xs={4}>
                  <ItemOne>
                    <h2>Alimentos Doados</h2>
                    <h1>100</h1>
                  </ItemOne>
                </Grid>
                <Grid item xs={4}>
                  <ItemOne>
                    <h2>Alimentos Recebidos</h2>
                    <h1>128</h1>
                  </ItemOne>
                </Grid>
                <Grid item xs={4}>
                  <ItemOne>
                    <h2>Rendimento no Mês</h2>
                    <h1>82%</h1>
                  </ItemOne>
                </Grid>
                <Grid item xs={4}>
                  <ItemOne>
                    <Gauge
                      {...settings}
                      cornerRadius="50%"
                      sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                          fontSize: 50,
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                          fill: 'var(--color-grafics-three)',
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                          fill: theme.palette.text.disabled,
                        },
                      })}
                    />
                  </ItemOne>
                </Grid>
              </React.Fragment>
            </section>
            <section className={style.grafics}>
              <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>
                    <ItemTwo>
                      <PieChart
                        series={[
                          {
                            data: [
                              { id: 0, value: 10, label: 'series A' },
                              { id: 1, value: 15, label: 'series B' },
                              { id: 2, value: 20, label: 'series C' },
                            ],
                          },
                        ]}
                        width={400}
                        height={200}
                        colors={['var(--color-grafics-one)', 
                          'var(--color-grafics-two)', 
                          'var(--color-grafics-three)'
                        ]}
                      />
                    </ItemTwo>
                      </Grid>
                      <Grid item xs={6}>
                        <ItemTwo>
                        <LineChart
                              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                              series={[
                                {
                                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                                  color: 'var(--color-grafics-four)',
                                },
                              ]}
                              height={300}
                              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                              grid={{ vertical: true, horizontal: true }}
                            />
                    </ItemTwo>
                  </Grid>
                  <Grid item xs={6}>
                    <ItemTwo>
                      <BarChart
                          series={[
                            { data: [35, 44, 24, 34], color: 'var(--color-grafics-one)' },
                            { data: [51, 6, 49, 30], color: 'var(--color-grafics-two)' },
                            { data: [15, 25, 30, 50], color: 'var(--color-grafics-three)' },
                            { data: [60, 50, 15, 25], color: 'var(--color-grafics-four)' },
                          ]}
                          height={290}
                          xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                      />
                    </ItemTwo>
                  </Grid>
                  <Grid item xs={6}>
                    <ItemTwo>
                      <BarChart
                            series={[
                              { data: [35, 44, 24, 34], color: 'var(--color-grafics-one)' },
                              { data: [60, 50, 15, 25], color: 'var(--color-grafics-three)' },
                              { data: [51, 6, 49, 30], color: 'var(--color-grafics-four)' },
                              { data: [15, 25, 30, 50], color: 'var(--color-grafics-two)' },
                            ]}
                            height={290}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        />
                    </ItemTwo>
                  </Grid>
                </Grid>
              </Box>
            </section>
          </section>
        </Content>
      </div>
    </>
  )
}

export default Dashboard