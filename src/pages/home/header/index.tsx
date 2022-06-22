import Navigation from './navigation';
import Search from './search';

export default function Header() {
  return (
    <div className="header-container">
      <Search />
      <div className="header-div">
        <div className="header-title">
          <h1>List Keeper</h1>
        </div>
      </div>
      <Navigation></Navigation>
    </div>
  );
}
