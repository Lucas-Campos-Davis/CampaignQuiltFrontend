import React from 'react';
import './App.css';

export function Header() {
  return <header>Campaign Quilt</header>
}

class CampaignOrAdventureButtons extends React.Component {
  render() {
    return (
      <div>
        <button>Looking for the Next Adventure</button>
        <button>Looking for a string of Adventures</button>
      </div>
    );
  }
}

class SearchParams extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let levelEntry;
    if (this.props.singleAdventures) {
      levelEntry = (
        <>
          <label for="currLevel">Current Level </label>
          <input type="number" id="currLevel" min="1" value="1" />
        </>
      );
    }
    else {
      levelEntry = (
        <>
          <label for="startLevel">Start Level </label>
          <input type="number" id="startLevel" min="1" value="1" />
          <label for="endLevel">End Level </label>
          <input type="number" id="endLevel" min="1" value="15" />
        </>
      );
    }

    const settings = [];

    this.props.settings.forEach((setting) => {
      settings.push(
        <option value={setting}>{setting}</option>
      );
    });

    return (
      <form>
        {levelEntry}
        <label for="settingSelect">Setting </label>
        <select id="settingSelect">
          {settings}
        </select>
        <label for="aLeague">AL </label>
        <input type="checkbox" id="aLeague" />
        <label for="maxPrice">Max Price </label>
        <input type="number" id="maxPrice" min="0" />
        <input type="submit" value="Go" />
      </form>
    );
  }
}

class AdventureRow extends React.Component{
  render(){
    const adventure = this.props.adventure;
    return (
      <tr>
        <td>{adventure.minLevel}</td>
        <td>{adventure.maxLevel}</td>
        <td>{adventure.title}</td>
        <td>{adventure.price}</td>
        <td>{adventure.description}</td>
        <td>{adventure.link}</td>
      </tr>
    );
  }
}

class AdventureTable extends React.Component {
  render() {
    const rows = [];
    this.props.adventures.forEach((adventure) => {
      rows.push(
        <AdventureRow adventure = {adventure}/>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Min Level</th>
            <th>Max Level</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const SETTINGS = ["HomeBrew", "Curse of Strahd", "Theria", "PlaneShift"];

const ADVENTURES = [
  {minLevel:'1', maxLevel:'4', title:'Bob', price:'0.00', description:'desc', link:'link'},
  {minLevel:'5', maxLevel:'6', title:'Bill', price:'1.50', description:'desc', link:'link'},
  {minLevel:'5', maxLevel:'10', title:'Billiam', price:'3.50', description:'desc', link:'link'},
  {minLevel:'7', maxLevel:'10', title:'Bimothy', price:'5.00', description:'desc', link:'link'},
  {minLevel:'1', maxLevel:'2', title:'Bert', price:'2.00', description:'desc', link:'link'},
];

export class AdventureFinder extends React.Component {
  render() {
    return (
      <div>
        <CampaignOrAdventureButtons />
        <SearchParams settings={SETTINGS} singleAdventures={true} />
        <AdventureTable adventures={ADVENTURES}/>
      </div>
    );
  }
}
