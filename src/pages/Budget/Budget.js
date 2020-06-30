import React, { useEffect, useMemo } from 'react'
import { fetchBudget, fetchBudgetedCategories } from 'data/actions/budget.actions'
import { fetchAllCategories } from 'data/actions/common.actions'

import { connect } from 'react-redux'


import { Grid } from './Budget.css'
import { LoadingIndicator } from 'components'


import BudgetCategoryList from 'pages/Budget/components/BudgetCategoryList'

function Budget({
    commonState, budgetState,
    fetchBudget, fetchBudgetedCategories, fetchAllCategories
}) {

    useEffect(() => {
        fetchBudget(1);
        fetchBudgetedCategories(1);
        fetchAllCategories()


        /* kiedy unmount
        return() => {
          console.log(yoo);
        } */

    }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories])

    const isLoaded = useMemo(
        () => (!!commonState && Object.keys(commonState).length === 0) && (!!budgetState && Object.keys(budgetState).length === 0),
        [commonState, budgetState]
    );




    return (
        <Grid>
            <section>
                {isLoaded ? <BudgetCategoryList /> : <LoadingIndicator />}
            </section>
            <section>
                {isLoaded ? 'Transcation list' : <LoadingIndicator />}
            </section>

        </Grid>
    )
}


export default connect(state => {
    return {
        budget: state.budget.budget,
        commonState: state.common.loadingState,
        budgetState: state.budget.loadingState
    }
}, {
    fetchBudget,
    fetchBudgetedCategories,
    fetchAllCategories
})(Budget)