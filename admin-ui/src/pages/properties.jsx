import { Component } from "react";
import { Redirect } from "react-router-dom";
import { Breadcrumps } from "../components/breadcrumbs.jsx";
import { PropertyList } from "../components/propertyList.jsx";
import { AuthError } from "../components/authError.jsx";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import { LoadMoreBtn } from "../components/loadMoreBtn.jsx";
import { Loading } from "../components/loading.jsx";

export class Properties extends Component {
  state = {
    page: 1,
    pages: null,
    properties: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch(
      `/api/properties?agentEmail=${this.props.user.email}&page=${this.state.page}`
    )
      .then((data) => data.json())
      .then((data) => this.setState({ ...data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  showMore = async () => {
    const { page, pages } = this.state;

    if (page < pages) {
      await this.setState((state) => ({ page: state.page + 1 }));

      await fetch(
        `/api/properties?agentEmail=${this.props.user.email}&page=${this.state.page}`
      )
        .then((data) => data.json())
        .then((data) =>
          this.setState((state) => ({
            properties: [...state.properties, ...data.properties],
          }))
        )
        .catch((error) => this.setState({ error }));
    }
  };

  render() {
    const { page, pages, properties, error, isLoading } = this.state;
    const { user } = this.props;
    const content = isLoading ? (
      <Loading />
    ) : (
      <PropertyList properties={properties} />
    );

    if (error) {
      return <AuthError error={error} />;
    }

    if (!user.email) {
      return <Redirect to="/" />;
    }

    return (
      <FullScreenPage user={user}>
        <Breadcrumps
          title="Properties"
          breadcrumbs={[]}
          lastBreadcrumbs="true"
        />

        {content}

        <LoadMoreBtn
          handleClick={this.showMore}
          page={page}
          pages={pages}
          properties={properties}
        />
      </FullScreenPage>
    );
  }
}
