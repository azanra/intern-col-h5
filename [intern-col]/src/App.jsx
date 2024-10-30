import './App.css'

function HeaderSection() {
  return (
    <div className="header-section">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9964 14.0483C27.9964 10.7439 28.0059 7.43924 27.9935 4.135C27.9834 1.46337 26.512 0.00566267 23.8352 0.00352412C17.3004 -0.0013362 10.7655 -0.000947376 4.23048 0.00332971C1.47076 0.00527384 0.00383428 1.49137 0.0024753 4.28158C-0.000825099 10.7608 -0.000825099 17.2402 0.0024753 23.7194C0.00402842 26.5092 1.47154 27.9949 4.23125 27.9967C10.7662 28.0009 17.3012 28.0013 23.836 27.9965C26.512 27.9945 27.9832 26.5364 27.9935 23.8642C28.0061 20.5923 27.9964 17.3203 27.9964 14.0483Z" fill="#FC3C62"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6416 17.6967C13.3357 18.1891 14.0845 18.2346 14.8092 17.7602C15.5186 17.2957 15.8291 16.614 15.7329 15.7636C15.5623 14.2555 13.9352 13.4931 12.5991 14.3267C12.1262 14.6217 11.6597 14.813 11.1553 14.5772C10.7039 14.3662 10.7278 13.9499 10.7506 13.5522C10.7559 13.4594 10.7612 13.3677 10.7603 13.2798C10.751 12.3072 10.7521 11.3347 10.7531 10.3622C10.7538 9.78008 10.7544 9.19798 10.7528 8.61587C10.7516 8.16188 10.747 7.70146 10.4668 7.31071C10.0283 6.6989 9.43875 6.42763 8.70268 6.62729C7.82573 6.86489 7.47828 7.53605 7.46881 8.3845C7.45435 9.65173 7.45665 10.9192 7.45895 12.1868C7.46 12.7654 7.46105 13.3441 7.4605 13.9227C7.4605 14.1638 7.45892 14.405 7.45734 14.6461C7.45383 15.1824 7.45031 15.7187 7.46417 16.2546C7.47531 16.6879 7.46423 17.1222 7.45315 17.5564C7.43116 18.418 7.40918 19.2793 7.5608 20.1323C7.70882 20.9666 8.2472 21.441 9.10965 21.4375C9.96785 21.434 10.4935 20.9549 10.6631 20.1302C10.7239 19.8348 10.7329 19.5288 10.7419 19.2227C10.7463 19.0741 10.7506 18.9254 10.7609 18.7779C10.7689 18.6635 10.7657 18.5448 10.7626 18.4258C10.7518 18.0239 10.741 17.6184 11.1592 17.3636C11.7069 17.0297 12.1368 17.3365 12.5756 17.6497C12.5976 17.6654 12.6195 17.6811 12.6416 17.6967ZM18.9576 21.4368C19.9397 21.4627 20.5503 20.76 20.5571 19.5562C20.5623 18.631 20.5629 17.7059 20.5623 16.7806C20.5621 16.3996 20.5616 16.0186 20.5611 15.6376C20.5605 15.0934 20.5598 14.5493 20.5598 14.005C20.5598 13.4499 20.5604 12.8948 20.5611 12.3397C20.5615 11.9697 20.5619 11.5996 20.5621 11.2296C20.5627 10.3043 20.5621 9.37905 20.5573 8.45398C20.5509 7.22464 19.9738 6.55 18.9724 6.56268C18.0148 6.57496 17.4605 7.23751 17.4379 8.40229C17.4371 8.44161 17.4362 8.48095 17.4354 8.5203C17.4298 8.77333 17.4243 9.0268 17.4392 9.2788C17.4802 9.97841 17.1766 10.2924 16.4705 10.2716C15.8396 10.253 15.2079 10.2573 14.5762 10.2616C14.3066 10.2634 14.0371 10.2653 13.7676 10.2653C12.9887 10.2655 12.6056 10.2655 12.4196 10.457C12.2329 10.6492 12.2449 11.0342 12.2546 11.8057C12.2635 12.5135 12.5083 12.7113 13.1916 12.5917C15.8551 12.1252 17.3429 13.3464 17.427 16.0615C17.4486 16.7572 17.4443 17.4536 17.44 18.1502C17.4371 18.6226 17.4342 19.095 17.4394 19.5673C17.4524 20.7224 18.0227 21.412 18.9576 21.4368Z" fill="white"/>
      </svg>
    </div>
  )
}

function BodySubheaderSection() {
  return (
    <div className='body-subheader-section'>
      <h2>Product Roadmap</h2>
    </div>
  )
}

function QuarterSection({quarter}) {
  return (
    <div className='quarter-section'>
      <p>{quarter}</p>
    </div>
  )
}

function MonthsSection({months}) {
  return (
    <div className='months-section'>
      <p>{months}</p>
    </div>
  )
}

function TaskDetail({task}) {
  return (
    <div className='task-detail'>
      <p>{task}</p>
    </div>
  )
}

function ProgressIcon() {
  return (
    <div className='progress-icon'>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99999 3.20001C8.56578 3.20001 9.10841 3.42477 9.50848 3.82485C9.90856 4.22493 10.1333 4.76755 10.1333 5.33335C10.1333 5.72268 10.032 6.08535 9.84532 6.40001H11.2C11.7067 6.40001 12.1333 6.75735 12.24 7.23201C13.312 11.504 13.3333 11.616 13.3333 11.7333C13.3333 12.0162 13.2209 12.2876 13.0209 12.4876C12.8209 12.6876 12.5496 12.8 12.2667 12.8H3.73332C3.45043 12.8 3.17911 12.6876 2.97908 12.4876C2.77904 12.2876 2.66666 12.0162 2.66666 11.7333C2.66666 11.616 2.68799 11.504 3.75999 7.23201C3.86666 6.75735 4.29332 6.40001 4.79999 6.40001H6.15466C5.96401 6.07702 5.86448 5.7084 5.86666 5.33335C5.86666 4.76755 6.09142 4.22493 6.4915 3.82485C6.89157 3.42477 7.43419 3.20001 7.99999 3.20001ZM7.99999 4.26668C7.71709 4.26668 7.44578 4.37906 7.24574 4.5791C7.0457 4.77914 6.93332 5.05045 6.93332 5.33335C6.93332 5.61624 7.0457 5.88755 7.24574 6.08759C7.44578 6.28763 7.71709 6.40001 7.99999 6.40001C8.28289 6.40001 8.5542 6.28763 8.75424 6.08759C8.95428 5.88755 9.06666 5.61624 9.06666 5.33335C9.06666 5.05045 8.95428 4.77914 8.75424 4.5791C8.5542 4.37906 8.28289 4.26668 7.99999 4.26668Z" fill="#B7BDC9"/>
      </svg>
    </div>
  )
}

function ProgressNumber({progress}) {
  return (
    <div className='progress-number'>
      <p>{progress}%</p>
    </div>
  )
}

function ProgressButton() {
  return (
    <div className='progress-btn'>
      <button>...</button>
    </div>
  )
}

function ProgressSection({progress}) {
  return (
    <div className='progress-section'>
      <ProgressIcon/>
      <ProgressNumber progress={progress}/>
      <ProgressButton/>
    </div>
  )
}

function CreateButton() {
  return (
    <div className='create-btn'>
      <button>+</button>
    </div>
  )
}

function CreateTextButton() {
  return (
    <div className='create-text-btn'>
      <p>Create new task</p>
    </div>
  )
}

function CreateNewTaskBtn() {
  return (
    <div className='create-container'>
      <CreateButton/>
      <CreateTextButton/>
    </div>
  )
}

function TaskContainer({task, progress}) {
  return (
    <div className='task-container'>
      <TaskDetail task={task}/>
      <ProgressSection progress={progress}/>
    </div>
  )
}

function QuarterContainer({quarter, months, tasks}) {
  return (
    <div className='quarter-container'>
      <QuarterSection quarter={quarter}/>
      <MonthsSection months={months}/>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskContainer key={index} task={task.description} progress={task.progress}/>
        ))
        ) : (
          <p>No Task Available</p>
        ) 
      }
      <CreateNewTaskBtn/>
    </div>
  )
}

function SubBodySection() {
  const firstQuarterData = [
    {
      quarter: 'Q1 2019',
      months: 'January - Match',
      tasks: [
        {description: 'Re-designed the zero-g doggie bags, No more spills!', progress: 64},
        {description: 'Travel & Relocation Support', progress: 12}
      ],
    }
  ]

  return (
    <div className='sub-body-section'>
      {
        firstQuarterData.map((data, index) => (
          <QuarterContainer 
            key={index}
            quarter={data.quarter}
            months={data.months}
            tasks={data.tasks}
            />
        ))
      }
    </div>
  )
}

function BodySection() {
  return (
    <div className='body-section'>
      <BodySubheaderSection/>
      <SubBodySection/>
    </div>
  )
}

function App() {
  return (
    <div className="main-section">
      <HeaderSection/>
      <BodySection/>
    </div>
  )
}

export default App
