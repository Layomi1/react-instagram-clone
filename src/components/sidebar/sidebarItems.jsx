import { Notifications, ProfileLink, Home, CreatePost, Search } from "../index";

export const SidebarItems = () => {
  return (
    <>
      <Home />
      <Search />
      <Notifications />
      <CreatePost />
      <ProfileLink />
    </>
  );
};
