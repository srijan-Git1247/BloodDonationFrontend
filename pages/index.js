import Layout from "../components/Layout";
import Link from "next/link";
import Eligibility from "../components/Eligibility";
import RequestItem from "../components/RequestItem";
import { API_URL } from "../config/index";
export default function HomePage({ events }) {
  
  return (
    <Layout>
      <Link href="/Donor/registerdonor"><a className="btn-secondary">Register as a donor</a></Link>
      <br></br>
      <br></br>
    

      <h1>Emergency Requests</h1>
      
      {events.length === 0 && <h1>No Requests</h1>}
      
      {events.map((evt) => (
        <RequestItem key={evt.id} evt={evt} />
      ))}

      <div>
        {events.length > 0 && (
          <Link href="/requests">
            <a className="btn-secondary">View All Requests</a>
          </Link>
        )}
      </div>

      <Eligibility />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=5`);
  const events = await res.json();

  return {
    props: { events },
    
  };
}