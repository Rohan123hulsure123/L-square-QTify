import React from 'react'
import { useOutletContext } from 'react-router-dom'
import HeroSection from "../../components/HeroSection/HeroSection";
import Section from '../../components/Section/Section';
import { fetchFilters } from '../../api/api';

export default function HomePage() {
    const { data } = useOutletContext();
    const {topAlbums, newAlbums, songs} = data;
  return (
    <>
        <HeroSection />
        <Section title={"Top Albums"} data={topAlbums}/>
        <Section title={"New Albums"} data={newAlbums}/>
        <Section title={"Songs"} data={songs} filterSource={fetchFilters}/>
    </>
  )
}
